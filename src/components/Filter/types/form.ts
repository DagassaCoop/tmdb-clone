import { FieldErrors, UseFormRegister } from "react-hook-form";
import { FormValues } from "../index";

export type TForm = {
  register: UseFormRegister<FormValues>;
  errors: FieldErrors<FormValues>;
};
