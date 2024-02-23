"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useForm, useFormState } from "react-hook-form";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { PasswordInput } from "@/components/ui/passwordInput";
import FeedBackNotification from "@/components/FeedBackNotification";

const FormLogin = () => {
  const [loginStatus, setLoginStatus] = useState<string | null>(null);
  const router = useRouter();
  const form = useForm({
    defaultValues: {
      login: "",
      password: "",
    },
  });

  const { isSubmitting } = useFormState(form);

  const onSubmit = async (values: any) => {
    setLoginStatus(null);
    const response = await signIn("credentials", {
      login: values.login,
      password: values.password,
      redirect: false,
    });
    form.reset;
    if (!response?.error) {
      setLoginStatus("Успешно");
      router.push("/dashboard");
      router.refresh();
    } else if (response?.error) {
      setLoginStatus("Неверный логин или пароль");
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8  p-4 w-3/4 relative pb-7 max-md:w-4/5"
      >
        <FormField
          control={form.control}
          name="login"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Логин</FormLabel>
              <FormControl>
                <Input placeholder="Админ" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Пароль</FormLabel>
              <FormControl>
                <PasswordInput placeholder="1234.." {...field} />
              </FormControl>
            </FormItem>
          )}
        />

        <Button variant={"outline"} type="submit">
          {isSubmitting ? "Загрузка..." : "Войти"}
        </Button>
      </form>
      <FeedBackNotification status={loginStatus} />
    </Form>
  );
};

export default FormLogin;
