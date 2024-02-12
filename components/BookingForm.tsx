"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { useEffect, useState } from "react";
import { DateRange, Matcher } from "react-day-picker";
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
import ErrorNotification from "./ErrorNotification";
import { BookingsFromDB } from "@/types";

const formSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: "Name must be min 2 ",
    })
    .max(50),
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

const BookingForm = () => {
  const [bookingStatus, setBookingStatus] = useState<boolean | null>(null);

  const pastMonth = new Date();
  const [range, setRange] = useState<DateRange | undefined>(undefined);

  const [disabledDays, setDisabledDays] = useState<
    Matcher | Matcher[] | undefined
  >(undefined);

  function createDisabledDays(array: BookingsFromDB[]) {
    const days = array.map((booking) => {
      return { from: booking.dateFrom, to: booking.dateTo };
    });

    setDisabledDays(days);
  }

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      room: undefined,
      checkIn: "",
      dateFrom: new Date(),
      dateTo: new Date(),
    },
  });

  const { isSubmitting } = useFormState(form);
  const typeOfRooms = form.getValues("room");

  let days = "";
  if (range?.from) {
    if (!range.to) {
      days = format(range.from, "PPP");
    } else if (range.to) {
      days = `${format(range.from, "PPP")} - ${format(range.to, "PPP")}`;
    }
  }

  // useEffect(() => {
  //   getBookings().then((data) => createDisabledDays(data as BookingsFromDB[]));
  // }, [typeOfRooms, bookingStatus]);

  const onSelectDays = (e: any) => {
    setRange(e);
    form.setValue("dateFrom", e.from);
    form.setValue("dateTo", e.to);
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
        setBookingStatus(true);
        setTimeout(() => {
          setBookingStatus(null);
        }, 2500);
      })
      .catch(() => {
        setBookingStatus(false);
      });
    setRange(undefined);
    form.reset();
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
                <FormLabel>Fullname</FormLabel>
                <FormControl>
                  <Input placeholder="Your name" {...field} />
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
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <Input placeholder="+79008007060" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="dateFrom"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Date</FormLabel>
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
                        {days ? days : <span>Pick a date</span>}
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
            name="room"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Your room</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue
                        defaultValue={field.value}
                        placeholder="Select a room you need"
                      />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="bg-white">
                    <SelectItem value="double">Двухместный</SelectItem>
                    <SelectItem value="triple">Трехместный</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="checkIn"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Check-in time</FormLabel>
                <FormControl>
                  <Input placeholder="time" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            className="disabled:bg-amber-100"
            disabled={isSubmitting}
            variant={"outline"}
            type="submit"
          >
            {isSubmitting ? "Booking..." : "Book"}
          </Button>
          <br />
          <ErrorNotification status={bookingStatus} />.
        </form>
      </Form>
    </>
  );
};

export default BookingForm;
