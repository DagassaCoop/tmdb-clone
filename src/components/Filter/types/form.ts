import { Control, FieldErrors, UseFormRegister } from "react-hook-form";

export type TForm = {
  register: UseFormRegister<IFormValues>;
  control: Control<IFormValues>;
  errors: FieldErrors<IFormValues>;
};

export interface IFormValues {
  [key: string]: string | string[] | number | number[] | undefined;
}
