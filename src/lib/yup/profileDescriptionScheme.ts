import * as yup from "yup";
import { RegexpList } from "@/utils/regexpList.ts";

export const profileDescriptionContactsSchema = yup.object().shape({
  phone: yup.string().matches(RegexpList.onlyNumbers, "Только цифры").max(10, "Максимум 11 символов").min(10, "Минимум 11 символов").required("Phone is required"),
  email: yup.string().email("Некорректный email").required("Email is required"),
})

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
  checkbox: yup.array().min(1, "Checkbox is required").of(yup.number()).required("Checkbox is required"),
  radio: yup.string().required("Radio is required"),
})

export const profileDescriptionThirdStepSchema = yup.object().shape({
  about: yup.string().trim().max(200, "Максимум 200 символов").min(3, "Минимум 3 символа").max(200, "Максимум 200 символов").required("About is required"),
})
