import { FieldErrors, UseFormRegister } from "react-hook-form";

export type TForm = {
  register: UseFormRegister<IFormValues>;
  errors: FieldErrors<IFormValues>;
};

export interface IFormValues {
  [key: string]: string | string[] | number | number[] | undefined;
}
