import { Control, FieldErrors, UseFormRegister, UseFormWatch } from "react-hook-form";

export type TForm = {
  register: UseFormRegister<IFormValues>;
  control: Control<IFormValues>;
  errors: FieldErrors<IFormValues>;
  watch: UseFormWatch<IFormValues>;
};

export interface IFormValues {
  [key: string]: string | string[] | number | number[] | undefined;
}
