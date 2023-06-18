export namespace MultiStepForm {
  export interface FirstStep {
    nickname: string;
    name: string;
    sername: string;
    sex: string;
  }

  export interface SecondStep {
    advantages: string[];
    checkbox: number | null;
    radio: number | null;
  }

  export interface ThirdStep {
    about: string;
  }

  export type RootObject = FirstStep & SecondStep & ThirdStep;
}
