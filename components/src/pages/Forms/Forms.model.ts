import { ForwardedRef, RefObject } from 'react';

export interface SwitchCatProps {
  innerRef?: ForwardedRef<HTMLInputElement>;
  ref?: RefObject<HTMLInputElement>;
  validCallback: (callbackName: string) => void;
}

export interface SelectProps {
  innerRef?: ForwardedRef<HTMLSelectElement>;
  ref?: RefObject<HTMLSelectElement>;
  validCallback: (callbackName: string) => void;
  isValidation: boolean | undefined;
}

export interface InputProps extends SwitchCatProps {
  isValidation: boolean | undefined;
  firstNameCheck?: boolean;
  avatarCheck?: boolean;
  birthDateCheck?: boolean;
  lastNameCheck?: boolean;
  mailCheck?: boolean;
  phoneNumberCheck?: boolean;
}

export interface InputState {
  isValid: boolean;
}

export interface FormsState {
  cards: FormCard[];
  disableButton: boolean;
  firstNameCheck: boolean;
  avatarCheck: boolean;
  birthDateCheck: boolean;
  genderCheck: boolean;
  lastNameCheck: boolean;
  mailCheck: boolean;
  phoneNumberCheck: boolean;
  showCat: boolean;
}

export interface FormCard {
  avatar?: string;
  birthDate?: string;
  comments?: string;
  consent?: boolean;
  firstName?: string;
  gender?: string;
  lastName?: string;
  mail?: string;
  phoneNumber?: string;
}

export interface FormsCardsProps {
  cards: Array<FormCard>;
}

export interface FormCardProps {
  card: FormCard;
}

export interface AvatarState extends InputState {
  imageUrl: string | ArrayBuffer | null;
}
