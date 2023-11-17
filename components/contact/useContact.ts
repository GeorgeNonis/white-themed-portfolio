"use server";

export const useContact = () => {
  const formHandler = async (formData: FormData) => {
    const senderEmail = formData.get("senderEmail");
    const message = formData.get("message");

    console.log({ senderEmail, message });
  };

  return { formHandler };
};
