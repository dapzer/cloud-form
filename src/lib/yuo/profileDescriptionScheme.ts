import * as yup from "yup";
import { RegexpList } from "@/utils/regexpList.ts";

export const profileDescriptionFirstStepSchema = yup.object().shape({
  nickname: yup.string().matches(RegexpList.onlyLettersAndNumbers, "Только буквы и цифры").max(30, "Максимум 30 символов").min(3, "Минимум 3 символа").required("Nickname is required"),
  name: yup.string().matches(RegexpList.onlyLetters, "Только буквы").max(50, "Максимум 50 символов").min(3, "Минимум 3 символа").required("Name is required"),
  sername: yup.string().matches(RegexpList.onlyLetters, "Только буквы").max(50, "Максимум 50 символов").min(3, "Минимум 3 символа").required("Sername is required"),
  sex: yup.string().required("Sex is required"),
});

export const profileDescriptionSecondStepSchema = yup.object().shape({
  advantages: yup.array().of(yup.object().shape({
    value: yup.string().matches(RegexpList.onlyLettersWithSpaces, "Только буквы и пробелы").max(50, "Максимум 50 символов").min(3, "Минимум 3 символа").required("Advantages is required")
  })),
  checkbox: yup.array().min(1, "Checkbox is required").required("Checkbox is required"),
  radio: yup.string().required("Radio is required"),
})
