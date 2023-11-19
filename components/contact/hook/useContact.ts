import { useSectionInView } from "@/hooks";
import { ChangeEvent, useState } from "react";
import { formHandler } from "./action";

export const useContact = () => {
  const [formValues, setFormValues] = useState({ email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const { ref } = useSectionInView("Contact");

  const formValuesHandler = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const formSumbitHandler = async () => {
    setLoading(true);
    await formHandler({ ...formValues });

    setFormValues({ email: "", message: "" });
    setLoading(false);
  };

  const values = {
    formValues,
    loading,
    ref,
  };

  const handlers = { formValuesHandler, formSumbitHandler };

  return {
    values,
    handlers,
  };
};
