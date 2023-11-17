"use server";
export const formHandler = async (formData: FormData) => {
  const senderEmail = formData.get("email");
  const message = formData.get("message");

  console.log({ senderEmail, message });
};
