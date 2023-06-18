import { MultiStepForm } from "@/types/MultiStepForm.ts";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

const initialState: MultiStepForm.RootObject = {
  nickname: "",
  name: "",
  sername: "",
  sex: "",
  about: "",
  advantages: Array(3).fill(""),
  checkbox: null,
  radio: null,
};

interface MultiStepFormStore extends MultiStepForm.RootObject {
  updateField: (field: keyof MultiStepForm.RootObject, value: string) => void;
  updateMultipleFields: (fields: Partial<MultiStepForm.RootObject>) => void;
}

export const useMultiStepFormStore = create<MultiStepFormStore>()(devtools((setState, getState, store) => ({
  ...initialState,

  updateField: (field: keyof MultiStepForm.RootObject, value: string) => {
    setState((state) => ({ ...state, [field]: value }), false, "form/multi-step-form/updateField");
  },

  updateMultipleFields: (fields: Partial<MultiStepForm.RootObject>) => {
    setState((state) => ({ ...state, ...fields }), false, "form/multi-step-form/updateMultipleFields");
  },
}), { name: "form/multi-step-form" }));
