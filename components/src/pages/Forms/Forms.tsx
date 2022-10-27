import React, { MouseEvent, RefObject, useEffect, useRef, useState } from 'react';

import Title from './Title/Title';
import Avatar from './Avatar/Avatar';
import Comments from './Comments/Comments';
import Consent from './Consent/Consent';
import FirstName from './FirstName/FirstName';
import BirthDate from './BirthDate/BirthDate';
import Mail from './Mail/Mail';
import LastName from './LastName/LastName';
import Gender from './Gender/Gender';
import PhoneNumber from './PhoneNumber/PhoneNumber';
import FormsCards from './FormsCards/FormsCards';
import SwitchCat from './SwitchCat/SwitchCat';

import {
  CatImg,
  FormsStyled,
  FormStyled,
  InformationStyled,
  InformationWrapperStyled,
  InputStyled,
} from './styled';

import {
  checkValidBirthDate,
  checkValidMail,
  checkValidName,
  checkValidPhoneNumber,
} from '../../functions/functions';
import { FormCard } from './Forms.model';

const Forms = () => {
  const avatarRef: RefObject<HTMLInputElement> = useRef(null);
  const birthDateRef: RefObject<HTMLInputElement> = useRef(null);
  const commentsRef: RefObject<HTMLTextAreaElement> = useRef(null);
  const consentRef: RefObject<HTMLInputElement> = useRef(null);
  const firstNameRef: RefObject<HTMLInputElement> = useRef(null);
  const genderRef: RefObject<HTMLSelectElement> = useRef(null);
  const lastNameRef: RefObject<HTMLInputElement> = useRef(null);
  const mailRef: RefObject<HTMLInputElement> = useRef(null);
  const phoneNumberRef: RefObject<HTMLInputElement> = useRef(null);
  const switchCarRef: RefObject<HTMLInputElement> = useRef(null);

  const [cards, setCards] = useState([] as FormCard[]);
  const [disableButton, setDisableButton] = useState(false);
  const [avatarCheck, setAvatarCheck] = useState(true);
  const [birthDateCheck, setBirthDateCheck] = useState(true);
  const [firstNameCheck, setFirstNameCheck] = useState(true);
  const [genderCheck, setGenderCheck] = useState(true);
  const [lastNameCheck, setLastNameCheck] = useState(true);
  const [mailCheck, setMailCheck] = useState(true);
  const [phoneNumberCheck, setPhoneNumberCheck] = useState(true);
  const [showCat, setShowCat] = useState(false);

  const handleSubmit = (e: MouseEvent<HTMLInputElement>) => {
    e.preventDefault();
    checkValidation();
  };

  const checkValidation = () => {
    const avatarFile = avatarRef.current?.files?.item(0);
    const birthDateValue = birthDateRef.current?.value;
    const firstNameValue = firstNameRef.current?.value;
    const genderValue = genderRef.current?.value;
    const lastNameValue = lastNameRef.current?.value;
    const mailValue = mailRef.current?.value;
    const phoneNumberValue = phoneNumberRef.current?.value;

    const isFirstNameValid = checkValidName(firstNameValue as string);
    firstNameCheck !== isFirstNameValid && setFirstNameCheck(isFirstNameValid);

    const isLastNameValid = checkValidName(lastNameValue as string);
    lastNameCheck !== isLastNameValid && setLastNameCheck(isLastNameValid);

    const isBirthDateValid = checkValidBirthDate(birthDateValue as string);
    birthDateCheck !== isBirthDateValid && setBirthDateCheck(isBirthDateValid);

    const isGenderValid = genderValue !== 'Please Select';
    genderCheck !== isGenderValid && setGenderCheck(isGenderValid);

    const isMailValid = checkValidMail(mailValue as string);
    mailCheck !== isMailValid && setMailCheck(isMailValid);

    const isPhoneNumberValid = checkValidPhoneNumber(phoneNumberValue as string);
    phoneNumberCheck !== isPhoneNumberValid && setPhoneNumberCheck(isPhoneNumberValid);

    const isAvatarValid = avatarFile !== null;
    avatarCheck !== isAvatarValid && setAvatarCheck(isAvatarValid);

    if (
      isFirstNameValid &&
      isLastNameValid &&
      isBirthDateValid &&
      isGenderValid &&
      isMailValid &&
      isPhoneNumberValid &&
      isAvatarValid
    ) {
      submitForm();
    } else setDisableButton(true);
  };

  const validCallback = (callbackName: string) => {
    switch (callbackName) {
      case 'lastNameCheck':
        !lastNameCheck && setLastNameCheck(true);

        break;
      case 'firstNameCheck':
        !firstNameCheck && setFirstNameCheck(true);

        break;
      case 'birthDateCheck':
        !birthDateCheck && setBirthDateCheck(true);

        break;
      case 'genderCheck':
        !genderCheck && setGenderCheck(true);

        break;
      case 'mailCheck':
        !mailCheck && setMailCheck(true);

        break;
      case 'phoneNumberCheck':
        !phoneNumberCheck && setPhoneNumberCheck(true);

        break;
      case 'avatarCheck':
        !avatarCheck && setAvatarCheck(true);

        break;
      case 'showCat':
        setShowCat((prevCat) => !prevCat);
        break;
    }
  };

  useEffect(() => {
    if (
      firstNameCheck &&
      avatarCheck &&
      birthDateCheck &&
      genderCheck &&
      lastNameCheck &&
      mailCheck &&
      phoneNumberCheck
    ) {
      disableButton && setDisableButton(false);
    } else !disableButton && setDisableButton(true);
  }, [
    firstNameCheck,
    avatarCheck,
    birthDateCheck,
    genderCheck,
    lastNameCheck,
    mailCheck,
    phoneNumberCheck,
    disableButton,
  ]);

  const submitForm = () => {
    const card = {
      avatar: avatarRef.current?.src,
      birthDate: birthDateRef.current?.value,
      comments: commentsRef.current?.value,
      consent: consentRef.current?.checked,
      firstName: firstNameRef.current?.value,
      gender: genderRef.current?.value,
      lastName: lastNameRef.current?.value,
      mail: mailRef.current?.value,
      phoneNumber: phoneNumberRef.current?.value,
    };
    setCards((prevCards) => {
      return [...prevCards, card];
    });
  };

  return (
    <>
      <FormsStyled>
        <Title />
        <FormStyled>
          <Avatar ref={avatarRef} validCallback={validCallback} isValidation={avatarCheck} />
          <InformationStyled>
            <InformationWrapperStyled>
              <FirstName
                ref={firstNameRef}
                validCallback={validCallback}
                isValidation={firstNameCheck}
              />
              <BirthDate
                ref={birthDateRef}
                validCallback={validCallback}
                isValidation={birthDateCheck}
              />
              <Mail ref={mailRef} validCallback={validCallback} isValidation={mailCheck} />
            </InformationWrapperStyled>
            <InformationWrapperStyled>
              <LastName
                ref={lastNameRef}
                validCallback={validCallback}
                isValidation={lastNameCheck}
              />
              <Gender ref={genderRef} validCallback={validCallback} isValidation={genderCheck} />
              <PhoneNumber
                ref={phoneNumberRef}
                validCallback={validCallback}
                isValidation={phoneNumberCheck}
              />
            </InformationWrapperStyled>
          </InformationStyled>
          <Comments ref={commentsRef} />
          <Consent ref={consentRef} />
          <SwitchCat ref={switchCarRef} validCallback={validCallback} />
          <InputStyled
            onClick={handleSubmit}
            type="submit"
            value="Submit Application"
            disabled={disableButton}
          />
        </FormStyled>
      </FormsStyled>
      {cards.length !== 0 && <FormsCards cards={cards} />}
      {showCat && <CatImg src={require('../../assets/img/form.webp')} alt={'Show cat'} />}
    </>
  );
};

export default Forms;
