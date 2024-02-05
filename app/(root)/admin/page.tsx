import { getServerSession } from "next-auth";
import FormLogin from "./FormLogin";
import { redirect } from "next/navigation";
import Container from "@/components/ui/container";

const AdminLogin = async () => {
  const session = await getServerSession();
  if (session) {
    redirect("/dashboard");
  }
  return (
    <Container title="Login to dashboard">
      <FormLogin />
    </Container>
  );
};

export default AdminLogin;
