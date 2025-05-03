import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";
import { options } from "../api/auth/[...nextauth]/options";
import LoginComponent from "@/components/commons/LoginComponent";

async function AdminAuthPage() {
  const session = await getServerSession(options);
  if (session?.user) {
    redirect("/admin/dashboard");
  }
  return <LoginComponent />;
}

export default AdminAuthPage;
