import React, { Component, createRef, MouseEvent, RefObject } from 'react';

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

import {
  CatImg,
  FormsStyled,
  FormStyled,
  InformationStyled,
  InformationWrapperStyled,
  InputStyled,
} from './styled';

import { FormsState } from './Forms.model';
import {
  checkValidBirthDate,
  checkValidMail,
  checkValidName,
  checkValidPhoneNumber,
} from '../../functions/functions';
import SwitchCat from './SwitchCat/SwitchCat';

export default class Forms extends Component<
  Readonly<unknown>,
  FormsState | Pick<FormsState, keyof FormsState>
> {
  avatarRef: RefObject<HTMLInputElement> = createRef();
  birthDateRef: RefObject<HTMLInputElement> = createRef();
  commentsRef: RefObject<HTMLTextAreaElement> = createRef();
  consentRef: RefObject<HTMLInputElement> = createRef();
  firstNameRef: RefObject<HTMLInputElement> = createRef();
  genderRef: RefObject<HTMLSelectElement> = createRef();
  lastNameRef: RefObject<HTMLInputElement> = createRef();
  mailRef: RefObject<HTMLInputElement> = createRef();
  phoneNumberRef: RefObject<HTMLInputElement> = createRef();
  switchCarRef: RefObject<HTMLInputElement> = createRef();

  constructor(props: Readonly<unknown>) {
    super(props);
    this.state = {
      cards: [],
      disableButton: false,
      avatarCheck: true,
      birthDateCheck: true,
      firstNameCheck: true,
      genderCheck: true,
      lastNameCheck: true,
      mailCheck: true,
      phoneNumberCheck: true,
      showCat: false,
    };
  }

  handleSubmit = (e: MouseEvent<HTMLInputElement>) => {
    e.preventDefault();
    this.checkValidation();
  };

  checkValidation = () => {
    const avatarFile = this.avatarRef.current?.files?.item(0);
    const birthDateValue = this.birthDateRef.current?.value;
    const firstNameValue = this.firstNameRef.current?.value;
    const genderValue = this.genderRef.current?.value;
    const lastNameValue = this.lastNameRef.current?.value;
    const mailValue = this.mailRef.current?.value;
    const phoneNumberValue = this.phoneNumberRef.current?.value;

    const isFirstNameValid = checkValidName(firstNameValue as string);
    this.state.firstNameCheck !== isFirstNameValid &&
      this.setState({ firstNameCheck: isFirstNameValid });

    const isLastNameValid = checkValidName(lastNameValue as string);
    this.state.lastNameCheck !== isLastNameValid &&
      this.setState({ lastNameCheck: isLastNameValid });

    const isBirthDateValid = checkValidBirthDate(birthDateValue as string);
    this.state.birthDateCheck !== isBirthDateValid &&
      this.setState({ birthDateCheck: isBirthDateValid });

    const isGenderValid = genderValue !== 'Please Select';
    this.state.birthDateCheck !== isGenderValid && this.setState({ genderCheck: isGenderValid });

    const isMailValid = checkValidMail(mailValue as string);
    this.state.mailCheck !== isMailValid && this.setState({ mailCheck: isMailValid });

    const isPhoneNumberValid = checkValidPhoneNumber(phoneNumberValue as string);
    this.state.phoneNumberCheck !== isPhoneNumberValid &&
      this.setState({ phoneNumberCheck: isPhoneNumberValid });

    const isAvatarValid = avatarFile !== null;
    this.state.avatarCheck !== isAvatarValid && this.setState({ avatarCheck: isAvatarValid });

    if (
      isFirstNameValid &&
      isLastNameValid &&
      isBirthDateValid &&
      isGenderValid &&
      isMailValid &&
      isPhoneNumberValid &&
      isAvatarValid
    ) {
      this.submitForm();
    } else this.setState({ disableButton: true });
  };

  validCallback = (callbackName: string) => {
    switch (callbackName) {
      case 'lastNameCheck':
        !this.state.lastNameCheck && this.setState({ lastNameCheck: true }, this.checkSubmitButton);
        break;
      case 'firstNameCheck':
        !this.state.firstNameCheck &&
          this.setState({ firstNameCheck: true }, this.checkSubmitButton);
        break;
      case 'birthDateCheck':
        !this.state.birthDateCheck &&
          this.setState({ birthDateCheck: true }, this.checkSubmitButton);
        break;
      case 'genderCheck':
        !this.state.genderCheck && this.setState({ genderCheck: true }, this.checkSubmitButton);
        break;
      case 'mailCheck':
        !this.state.mailCheck && this.setState({ mailCheck: true }, this.checkSubmitButton);
        break;
      case 'phoneNumberCheck':
        !this.state.phoneNumberCheck &&
          this.setState({ phoneNumberCheck: true }, this.checkSubmitButton);
        break;
      case 'avatarCheck':
        !this.state.avatarCheck && this.setState({ avatarCheck: true }, this.checkSubmitButton);
        break;
      case 'showCat':
        this.setState((state) => ({
          showCat: !state.showCat,
        }));
        break;
    }
  };

  checkSubmitButton = () => {
    if (
      this.state.firstNameCheck &&
      this.state.avatarCheck &&
      this.state.birthDateCheck &&
      this.state.genderCheck &&
      this.state.lastNameCheck &&
      this.state.mailCheck &&
      this.state.phoneNumberCheck
    ) {
      this.state.disableButton && this.setState({ disableButton: false });
    } else !this.state.disableButton && this.setState({ disableButton: true });
  };

  submitForm = () => {
    const card = {
      avatar: this.avatarRef.current?.src,
      birthDate: this.birthDateRef.current?.value,
      comments: this.commentsRef.current?.value,
      consent: this.consentRef.current?.checked,
      firstName: this.firstNameRef.current?.value,
      gender: this.genderRef.current?.value,
      lastName: this.lastNameRef.current?.value,
      mail: this.mailRef.current?.value,
      phoneNumber: this.phoneNumberRef.current?.value,
    };
    this.setState((state) => ({
      cards: [...state.cards, card],
    }));
  };

  render() {
    const {
      cards,
      disableButton,
      firstNameCheck,
      avatarCheck,
      birthDateCheck,
      genderCheck,
      lastNameCheck,
      mailCheck,
      phoneNumberCheck,
      showCat,
    } = this.state;
    return (
      <>
        <FormsStyled>
          <Title />
          <FormStyled>
            <Avatar
              ref={this.avatarRef}
              validCallback={this.validCallback}
              isValidation={avatarCheck}
            />
            <InformationStyled>
              <InformationWrapperStyled>
                <FirstName
                  ref={this.firstNameRef}
                  validCallback={this.validCallback}
                  isValidation={firstNameCheck}
                />
                <BirthDate
                  ref={this.birthDateRef}
                  validCallback={this.validCallback}
                  isValidation={birthDateCheck}
                />
                <Mail
                  ref={this.mailRef}
                  validCallback={this.validCallback}
                  isValidation={mailCheck}
                />
              </InformationWrapperStyled>
              <InformationWrapperStyled>
                <LastName
                  ref={this.lastNameRef}
                  validCallback={this.validCallback}
                  isValidation={lastNameCheck}
                />
                <Gender
                  ref={this.genderRef}
                  validCallback={this.validCallback}
                  isValidation={genderCheck}
                />
                <PhoneNumber
                  ref={this.phoneNumberRef}
                  validCallback={this.validCallback}
                  isValidation={phoneNumberCheck}
                />
              </InformationWrapperStyled>
            </InformationStyled>
            <Comments ref={this.commentsRef} />
            <Consent ref={this.consentRef} />
            <SwitchCat ref={this.switchCarRef} validCallback={this.validCallback} />
            <InputStyled
              onClick={this.handleSubmit}
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
  }
}
