import { getServerSession } from "next-auth";
import FormLogin from "./FormLogin";
import { redirect } from "next/navigation";

const AdminLogin = async () => {
  const session = await getServerSession();
  if (session) {
    redirect("/dashboard");
  }
  return <FormLogin />;
};

export default AdminLogin;
