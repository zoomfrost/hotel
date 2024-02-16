"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { format, closestTo, sub } from "date-fns";
import { SetStateAction, useEffect, useState } from "react";
import {
  DateAfter,
  DateRange,
  Matcher,
  SelectRangeEventHandler,
} from "react-day-picker";
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
import { addBooking, getBookings } from "@/actions/action";
import FeedBackNotification from "./FeedBackNotification";
import { BookingsFromDB } from "@/types";

const BookingForm = () => {
  const [typeOfRooms, setTypeOfRooms] = useState("");
  const [bookingStatus, setBookingStatus] = useState<string | null>(null);

  const pastMonth = new Date();
  const [range, setRange] = useState<DateRange | undefined>(undefined);
  const daysBefore = [{ before: new Date() }];
  const [disabledDays, setDisabledDays] = useState<Matcher[]>(daysBefore);

  const selectRoomData = [
    {
      value: "№1",
      text: "Трехместный №1",
    },
    {
      value: "№2",
      text: "Трехместный №2",
    },
    {
      value: "№3",
      text: "Двухместный №1",
    },
    {
      value: "№4",
      text: "Двухместный №2",
    },
  ];

  const formSchema = z.object({
    name: z
      .string()
      .min(2, {
        message: "Name must be min 2 ",
      })
      .max(50),
    surname: z.string(),
    room: z.string(),
    phone: z
      .string()
      .regex(
        /^\++[0-9]{1}[0-9]{3}[0-9]{3}[0-9]{2}[0-9]{2}/,
        "Неверный формат номера"
      ),
    checkIn: z.string(),
    dateFrom: z.date(),
    dateTo: z.date(),
  });

  function createDisabledDays(array: BookingsFromDB[]) {
    if (array.length > 0) {
      const days = array.map((booking) => {
        return { from: booking.dateFrom, to: sub(booking.dateTo, { days: 1 }) };
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
          return [...daysBefore, ...days];
        });
      }
    } else {
      setDisabledDays(daysBefore);
    }
  }

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      surname: "",
      phone: "",
      room: undefined,
      checkIn: "",
      dateFrom: new Date(),
      dateTo: new Date(),
    },
  });

  const { isSubmitting } = useFormState(form);

  let days = "";
  if (range?.from) {
    if (!range.to) {
      days = `Заезд ${format(range.from, "dd.MM.yyyy")}`;
    } else if (range.to) {
      days = `Заезд ${format(range.from, "dd.MM.yyyy")} - Выезд ${format(
        range.to,
        "dd.MM.yyyy"
      )}`;
    }
  }

  useEffect(() => {
    getBookings(typeOfRooms).then((data) =>
      createDisabledDays(data as BookingsFromDB[])
    );
  }, [typeOfRooms, range, bookingStatus]);

  const onSelectDays = (e: any) => {
    if (e !== undefined) {
      setRange(e);
      form.setValue("dateFrom", e.from);
      form.setValue("dateTo", e.to);
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
                <FormLabel>Имя</FormLabel>
                <FormControl>
                  <Input placeholder="Иван" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="surname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Фамилия</FormLabel>
                <FormControl>
                  <Input placeholder="Иванов" {...field} />
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
                  }}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue
                        defaultValue={field.value}
                        placeholder="Выберите номер"
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
                        {days ? days : <span>Выберите даты</span>}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0 bg-white" align="start">
                    <Calendar
                      mode="range"
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
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
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
          {/* <p>к оплате 1000 руб.</p> */}
          <Button
            className="disabled:bg-amber-100"
            disabled={isSubmitting}
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
