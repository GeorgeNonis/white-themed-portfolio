"use server";
import { getErrorMessage, validateString } from "@/utils";
import { Resend } from "resend";
import { FormHandlerProps } from "./action.types";

const resend = new Resend(process.env.RESEND_API_KEY);
export const formHandler = async ({ email, message }: FormHandlerProps) => {
  if (!validateString(email, 300)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(message, 3000)) {
    return {
      error: "Invalid message",
    };
  }

  let data;
  try {
    data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "georgenonis@gmail.com",
      subject: "Message from portfolio contact form",
      reply_to: email,
      text: message,
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }
  return {};
};
