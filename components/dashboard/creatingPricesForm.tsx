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

const creatingPricesForm = () => {
  const [pricingStatus, setPricingStatus] = useState<string | null>(null);
  const [data, setData] = useState<any>();
  console.log(data);

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

  const formSchema = z.object({
    room: z.string(),
    price: z.string(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      room: undefined,
      price: "",
    },
  });

  const { isSubmitting } = useFormState(form);

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setPricingStatus(null);
    const response = await createPrice(values)
      .then((data) => {
        setData(data);
        setPricingStatus("Успешно");
        setTimeout(() => {
          setPricingStatus(null);
        }, 2500);
      })
      .catch(() => {
        setPricingStatus("Ошибка");
      });
    form.reset();
  };

  return (
    <>
      <p>Установить цену номера</p>
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
            className="disabled:bg-amber-100"
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
