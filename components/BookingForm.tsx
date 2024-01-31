"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { useState } from "react";
import { DateRange, SelectRangeEventHandler } from "react-day-picker";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Calendar } from "@/components/ui/calendar";
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
import useBookingService from "@/services/BookingsService";

const formSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: "Name must be min 2 ",
    })
    .max(50),
  room: z.enum(["double", "triple"]),
  phone: z.string().min(6).max(12),
  checkIn: z.string(),
  date: z.string(),
});

const BookingForm = () => {
  const { postBooking } = useBookingService();
  const pastMonth = new Date();
  const [range, setRange] = useState<DateRange | undefined>(undefined);

  let days = "";
  if (range?.from) {
    if (!range.to) {
      days = format(range.from, "PPP");
    } else if (range.to) {
      days = `${format(range.from, "PPP")} - ${format(range.to, "PPP")}`;
    }
  }

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      room: "double",
      checkIn: "",
      date: "",
    },
  });

  const onSelectDays = (e: any) => {
    days = `${format(e.from, "dd.MM.yyyy")} - ${
      e.to ? format(e.to, "dd.MM.yyyy") : "No day"
    }`;
    setRange(e);
    form.setValue("date", days);
  };

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    postBooking({ ...values, canceled: false });
    setRange(undefined);
    form.reset();
  };

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 p-4 w-3/4 relative pb-7"
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
                  <Input placeholder="+7..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Date</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl className="">
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full pl-3 text-left font-normal",
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
                      initialFocus
                      modifiersClassNames={{
                        selected: "selected",
                      }}
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
                      <SelectValue placeholder="Select a room you need" />
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
          <Button variant={"outline"} name="submit" type="submit">
            Book
          </Button>
        </form>
      </Form>
    </>
  );
};

export default BookingForm;
