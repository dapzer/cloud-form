import { ProfileDescriptionFormTypes } from "@/types/ProfileDescriptionFormTypes.ts";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

const initialState: ProfileDescriptionFormTypes.RootObject = {
  nickname: "",
  name: "",
  sername: "",
  sex: "",
  about: "",
  advantages: Array(3).fill({value: ""}),
  checkbox: [],
  radio: undefined,
};

interface ProfileDescriptionFormStore extends ProfileDescriptionFormTypes.RootObject {
  updateField: (field: keyof ProfileDescriptionFormTypes.RootObject, value: string) => void;
  updateMultipleFields: (fields: Partial<ProfileDescriptionFormTypes.RootObject>) => void;
}

export const useProfileDescriptionFormStore = create<ProfileDescriptionFormStore>()(devtools((setState, getState, store) => ({
  ...initialState,

  updateField: (field: keyof ProfileDescriptionFormTypes.RootObject, value: string) => {
    setState((state) => ({ ...state, [field]: value }), false, "form/profile-description/updateField");
  },

  updateMultipleFields: (fields: Partial<ProfileDescriptionFormTypes.RootObject>) => {
    setState((state) => ({ ...state, ...fields }), false, "form/profile-description/updateMultipleFields");
  },
}), { name: "form/profile-description" }));
