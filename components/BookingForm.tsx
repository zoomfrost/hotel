"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  format,
  closestTo,
  sub,
  add,
  differenceInCalendarDays,
} from "date-fns";
import { useEffect, useState } from "react";
import {
  DateAfter,
  DateRange,
  Matcher,
  SelectRangeEventHandler,
} from "react-day-picker";
import { ru } from "date-fns/locale";

import { useForm, useFormState } from "react-hook-form";
import { z } from "zod";
import { Calendar } from "@/components/ui/calendar";
import { v4 as uuidv4 } from "uuid";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "@radix-ui/react-icons";
import {
  addBooking,
  getBookings,
  getCurrentRoomPricePerDay,
} from "@/actions/action";
import FeedBackNotification from "./FeedBackNotification";
import { BookingsFromDB } from "@/types";
import Link from "next/link";
import { Checkbox } from "./ui/checkbox";
import { usePathname } from "next/navigation";
import { Textarea } from "./ui/textarea";
import PriceNotification from "./PriceNotification";

const BookingForm = () => {
  const [typeOfRooms, setTypeOfRooms] = useState("");
  const [bookingStatus, setBookingStatus] = useState<string | null>(null);

  const [prepayment, setPrepayment] = useState<number | null>(null);
  const [actualPrice, setActualPrice] = useState<number | null>(null);

  const pastMonth = new Date();
  const [range, setRange] = useState<DateRange | undefined>(undefined);
  const [disabledDays, setDisabledDays] = useState<Matcher[]>([]);
  const [privacyCheckbox, setPrivacyCheckbox] = useState(true);
  const pathname = usePathname();

  const selectRoomData = [
    {
      value: "triple1",
      text: "Трехместный №1",
    },
    {
      value: "triple2",
      text: "Трехместный №2",
    },
    {
      value: "double1",
      text: "Двухместный №1",
    },
    {
      value: "double2",
      text: "Двухместный №2",
    },
  ];

  const formSchema = z
    .object({
      name: z
        .string()
        .min(2, {
          message: "Обязательное поле",
        })
        .max(50, {
          message: "Максимум 50 символов",
        }),
      room: z.string({
        required_error: "Выберите номер",
      }),
      phone: z
        .string()
        .regex(
          /^\++[0-9]{1}[0-9]{3}[0-9]{3}[0-9]{2}[0-9]{2}/,
          "Неверный формат номера"
        ),
      checkIn: z.string().min(2, {
        message: "Обязательное поле",
      }),
      dateFrom: z.date({ required_error: "Выберите дату заезда" }),
      dateTo: z.date({
        required_error: "Выберите дату выезда",
      }),
      comment: z
        .string({
          required_error: "Обязательное поле",
        })
        .max(250, {
          message: "Максимум 250 символов",
        }),
    })
    .required();

  function createDisabledDays(array: BookingsFromDB[]) {
    if (array.length > 0) {
      const days = array.map((booking) => {
        return { from: booking.dateFrom, to: booking.dateTo };
      });
      const startsDayArray = array.map((item) => {
        return item.dateFrom;
      });
      const closestBookedDay = closestTo(
        range?.from as Date,
        startsDayArray.filter((item) => {
          return item > form.getValues("dateFrom");
        }) as Date[]
      );
      if (range?.from) {
        setDisabledDays((prevState) => {
          return [...prevState, { after: closestBookedDay } as DateAfter];
        });
      } else {
        setDisabledDays(() => {
          return [...days];
        });
      }
    } else {
      setDisabledDays([]);
    }
  }

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      room: undefined,
      checkIn: "",
      dateFrom: undefined,
      dateTo: undefined,
      comment: "",
    },
  });

  const { isSubmitting } = useFormState(form);

  let days = "";
  if (range?.from) {
    if (!range.to) {
      days = `Заезд ${format(range.from, "dd.MM.yyyy")}`;
    } else if (range.to) {
      days = `Заезд ${format(range.from, "dd.MM.yyyy")} - Выезд ${format(
        add(range.to, { days: 1 }),
        "dd.MM.yyyy"
      )}`;
    }
  }

  useEffect(() => {
    getBookings(typeOfRooms).then((data) =>
      createDisabledDays(data as BookingsFromDB[])
    );
  }, [typeOfRooms, range, bookingStatus]);
  useEffect(() => {
    setActualPrice(null);
    if (range?.from && range.to) {
      getCurrentRoomPricePerDay(typeOfRooms.replace(/[0-9]/g, ""), {
        start: range?.from as Date,
        end: range?.to as Date,
      }).then((data) => {
        setPrepayment(data[0].price);
        setActualPrice(
          data.reduce(function (currentSum, currentInterval) {
            return currentSum + currentInterval.days * currentInterval.price;
          }, 0)
        );
      });
    }
  }, [range]);
  const onSelectDays = (e: DateRange | undefined) => {
    if (e !== undefined) {
      setRange(e);
      form.setValue("dateFrom", e.from as Date);
      form.setValue("dateTo", e.to as Date);
    } else {
      setRange(undefined);
    }
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setBookingStatus(null);
    const response = await addBooking({
      ...values,
      canceled: false,
      id: uuidv4(),
      created: new Date(),
    })
      .then(() => {
        setBookingStatus("Успешно");
        setTimeout(() => {
          setBookingStatus(null);
        }, 2500);
      })
      .catch(() => {
        setBookingStatus("Ошибка");
      });
    form.reset();
    setRange(undefined);
  };

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 w-full p-4 relative pb-7 max-xs:text-sm"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>ФИО</FormLabel>
                <FormControl>
                  <Input placeholder="Иванов Иван" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Номер телефона</FormLabel>
                <FormControl>
                  <Input placeholder="+79008007060" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="room"
            render={({ field }) => (
              <FormItem>
                <Select
                  key={field.value}
                  defaultValue={field.value}
                  onValueChange={(event) => {
                    setTypeOfRooms(event);
                    field.onChange(event);
                    setRange(undefined);
                  }}
                >
                  <FormLabel>Выберите номер</FormLabel>

                  <FormControl>
                    <SelectTrigger>
                      <SelectValue
                        defaultValue={field.value}
                        placeholder="Не выбрано"
                      />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="bg-white">
                    {selectRoomData.map((item) => (
                      <SelectItem key={item.value} value={item.value}>
                        {item.text}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="dateFrom"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Выберите даты</FormLabel>

                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full pl-3 h-auto whitespace-normal text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {days ? days : <span>Не выбрано</span>}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0 bg-white" align="start">
                    <Calendar
                      locale={ru}
                      fixedWeeks={true}
                      mode="range"
                      min={2}
                      selected={range}
                      onSelect={onSelectDays}
                      defaultMonth={pastMonth}
                      modifiersClassNames={{
                        selected: "selected",
                      }}
                      modifiersStyles={{
                        disabled: { color: "red" },
                      }}
                      disabled={disabledDays}
                      fromDate={new Date()}
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
                <FormField
                  control={form.control}
                  name="dateTo"
                  render={({ field }) => <FormMessage className="m-0" />}
                />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="checkIn"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Время заезда</FormLabel>
                <FormControl>
                  <Input placeholder="15:00" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="comment"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Комментарий</FormLabel>
                <FormControl>
                  <Textarea
                    className="h-[100px] whitespace-normal resize-none"
                    placeholder="Понадобится раскладушка, хотел бы продлить время выезда на час ..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {pathname !== "/dashboard" ? (
            <div className="flex items-center gap-x-3">
              <Checkbox
                key={form.getValues("name")}
                className="w-5 h-5 border-black-100 checked:color"
                onCheckedChange={(e) => {
                  setPrivacyCheckbox((prevState) => {
                    return !prevState;
                  });
                }}
              />
              <FormLabel>
                Я согласен с{" "}
                <Link
                  target="_blank"
                  className="text-primary underline underline-offset-2"
                  href="/booking"
                >
                  Правилами бронирования
                </Link>{" "}
                и{" "}
                <Link
                  target="_blank"
                  className="text-primary underline underline-offset-2"
                  href="/privacy"
                >
                  Политикой конфиденциальности
                </Link>
              </FormLabel>
            </div>
          ) : null}
          <PriceNotification price={actualPrice} prepayment={prepayment} />
          <Button
            className="disabled:bg-gray-300 "
            disabled={
              isSubmitting || pathname === "/dashboard"
                ? false
                : privacyCheckbox
            }
            variant={"outline"}
            type="submit"
          >
            {isSubmitting ? "Бронируем..." : "Забронировать"}
          </Button>
          <br />
          <FeedBackNotification status={bookingStatus} />.
        </form>
      </Form>
    </>
  );
};

export default BookingForm;
