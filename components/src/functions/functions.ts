export const checkValidName = (nameValue: string) => {
  const nameRegExp = /^[A-Za-z]+$/;
  return nameRegExp.test(nameValue);
};

export const checkValidBirthDate = (birthDateValue: string) => {
  const birthDateRegExp = /^(19|20)\d\d([- /.])(0[1-9]|1[012])\2(0[1-9]|[12][0-9]|3[01])$/;
  return birthDateRegExp.test(birthDateValue);
};

export const checkValidMail = (mailValue: string) => {
  const mailRegExp =
    /^(([^<>()[\],;:\s@]+(\.[^<>()[\],;:\s@]+)*)|(.+))@(([^<>()[\],;:\s@]+\.)+[^<>()[\],;:\s@]{2,})$/i;
  return mailRegExp.test(mailValue);
};

export const checkValidPhoneNumber = (phoneNumberValue: string) => {
  const phoneNumberRegExp = /^\+?[(]?[0-9]{3}[)]?[-\s]?[0-9]{3}[-\s]?[0-9]{4,6}$/im;
  return phoneNumberRegExp.test(phoneNumberValue);
};
