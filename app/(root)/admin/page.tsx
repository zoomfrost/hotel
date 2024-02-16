import { getServerSession } from "next-auth";
import FormLogin from "./FormLogin";
import { redirect } from "next/navigation";
import Container from "@/components/ui/container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Администратор",
  description: "Гостевой дом / Отель в центре Санкт-Петербурга",
};

const AdminLogin = async () => {
  const session = await getServerSession();
  if (session) {
    redirect("/dashboard");
  }
  return (
    <Container title="Вход администратора">
      <FormLogin />
    </Container>
  );
};

export default AdminLogin;
