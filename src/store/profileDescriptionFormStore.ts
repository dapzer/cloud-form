import { ProfileDescriptionFormTypes } from "@/types/ProfileDescriptionFormTypes.ts";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

const initialState: ProfileDescriptionFormTypes.RootObject = {
  phone: "9605806041",
  email: "danilavoronkov2002@gmail.com",
  nickname: "",
  name: "",
  sername: "",
  sex: "",
  about: "",
  advantages: Array(3).fill({ value: "" }),
  checkbox: [],
  radio: "",
};

interface ProfileDescriptionFormStore extends ProfileDescriptionFormTypes.RootObject {
  updateField: (field: keyof ProfileDescriptionFormTypes.RootObject, value: string) => void;
  updateMultipleFields: (fields: Partial<ProfileDescriptionFormTypes.RootObject>) => void;
  sendForm: () => Promise<void>;
  reset: () => void;
}

export const useProfileDescriptionFormStore = create<ProfileDescriptionFormStore>()(devtools((setState, getState, store) => ({
  ...initialState,

  updateField: (field: keyof ProfileDescriptionFormTypes.RootObject, value: string) => {
    setState((state) => ({ ...state, [field]: value }), false, "form/profile-description/updateField");
  },

  updateMultipleFields: (fields: Partial<ProfileDescriptionFormTypes.RootObject>) => {
    setState((state) => ({ ...state, ...fields }), false, "form/profile-description/updateMultipleFields");
  },

  sendForm: async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/bootcamp/frontend`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          phone: getState().phone,
          email: getState().email,
          nickname: getState().nickname,
          name: getState().name,
          sername: getState().sername,
          sex: getState().sex,
          about: getState().about,
          advantages: getState().advantages.map((el) => el.value),
          checkbox: getState().checkbox,
          radio: Number(getState().radio),
        }),
      });
      return response.json();
    } catch (e) {
      throw new Error(e as string);
    }
  },

  reset: () => {
    setState(initialState, false, "form/profile-description/reset");
  },
}), { name: "form/profile-description" }));
