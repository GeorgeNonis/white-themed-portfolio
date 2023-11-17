"use server";
import React from "react";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
export const formHandler = async (formData: FormData) => {
  const senderEmail = formData.get("email");
  const message = formData.get("message") || "";

  resend.emails.send({
    from: "onboarding@resend.dev",
    to: "georgenonis@gmail.com",
    subject: "Message from portfolio contact form",
    text: "Testing",
  });
};
