export namespace ProfileDescriptionFormTypes {
 export interface Contacts {
   phone: string;
   email: string;
 }

  export interface FirstStep {
    nickname: string;
    name: string;
    sername: string;
    sex: string;
  }

  export interface SecondStep {
    advantages: { value: string }[];
    checkbox: number[];
    radio: string | undefined;
  }

  export interface ThirdStep {
    about: string;
  }

  export type RootObject = FirstStep & SecondStep & ThirdStep & Contacts;
}
