"use client";

import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

import FeedBackNotification from "../FeedBackNotification";
import { useState } from "react";
import { z } from "zod";
import { useForm, useFormState } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { createPrice } from "@/actions/action";
import { DateRange } from "react-day-picker";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Calendar } from "../ui/calendar";
import { add, format } from "date-fns";
import { CalendarIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";

const creatingPricesForm = () => {
  const [pricingStatus, setPricingStatus] = useState<string | null>(null);

  const [range, setRange] = useState<DateRange | undefined>(undefined);
  const pastMonth = new Date();

  let days = "";
  if (range?.from) {
    if (!range.to) {
      days = `с ${format(range.from, "dd.MM.yyyy")}`;
    } else if (range.to) {
      days = `с ${format(range.from, "dd.MM.yyyy")} - по ${format(
        range.to,
        "dd.MM.yyyy"
      )}`;
    }
  }

  const selectRoomData = [
    {
      value: "double",
      text: "Двухместный",
    },
    {
      value: "triple",
      text: "Трехместный",
    },
  ];

  const formSchema = z
    .object({
      room: z.string({
        required_error: "Обязательное поле",
      }),
      price: z.string({
        required_error: "Обязательное поле",
      }),
      dateFrom: z.date(),
      dateTo: z.date(),
    })
    .required();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      room: undefined,
      price: "",
      dateFrom: undefined,
      dateTo: undefined,
    },
  });

  const onSelectDays = (e: any) => {
    if (e !== undefined) {
      setRange(e);
      form.setValue("dateFrom", e.from);
      form.setValue("dateTo", e.to);
    } else {
      setRange(undefined);
    }
  };

  const { isSubmitting } = useFormState(form);

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setPricingStatus(null);
    const response = await createPrice(values)
      .then((data) => {
        setPricingStatus("Успешно");
        setTimeout(() => {
          setPricingStatus(null);
        }, 2500);
      })
      .catch(() => {
        setPricingStatus("Ошибка");
      });
    form.reset();
    setRange(undefined);
  };

  return (
    <>
      <p className="text-center">Установить цену номера</p>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 w-full p-4 relative pb-7 max-xs:text-sm"
        >
          <FormField
            control={form.control}
            name="room"
            render={({ field }) => (
              <FormItem>
                <Select
                  key={field.value}
                  defaultValue={field.value}
                  onValueChange={(event) => {
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
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Цена за сутки</FormLabel>
                <FormControl>
                  <Input placeholder="1500" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            className="disabled:bg-gray-300"
            disabled={isSubmitting}
            variant={"outline"}
            type="submit"
          >
            {isSubmitting ? "Установка..." : "Установить"}
          </Button>
          <br />
          <FeedBackNotification status={pricingStatus} />.
        </form>
      </Form>
    </>
  );
};

export default creatingPricesForm;
