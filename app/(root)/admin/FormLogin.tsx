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
import React from "react";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { PasswordInput } from "@/components/ui/passwordInput";

const FormLogin = () => {
  const router = useRouter();
  const form = useForm({
    defaultValues: {
      login: "",
      password: "",
    },
  });

  const onSubmit = async (values: any) => {
    const response = await signIn("credentials", {
      login: values.login,
      password: values.password,
      redirect: false,
    });

    if (!response?.error) {
      router.push("/dashboard");
      router.refresh();
    }
  };

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 p-4 w-3/4 relative pb-7 max-md:w-4/5"
        >
          <FormField
            control={form.control}
            name="login"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Login</FormLabel>
                <FormControl>
                  <Input placeholder="Login" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <PasswordInput placeholder="Password" {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <Button variant={"outline"} type="submit">
            Log in
          </Button>
        </form>
      </Form>
    </>
  );
};

export default FormLogin;
