export enum GeneralAppActionTypes {
    ERROR = "ERROR"
}

export interface Error {
    type: GeneralAppActionTypes.ERROR;
    message: string;
}

export type GeneralAppActions = Error

