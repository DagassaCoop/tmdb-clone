import { FieldValues, FieldErrors, UseFormRegister } from "react-hook-form";

export type TForm = {
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
};
