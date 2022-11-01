import React, { ChangeEvent, Component, forwardRef } from 'react';
import { LabelStyled } from '../styled';
import { InputProps, InputState } from '../Forms.model';
import ValidError from '../../../components/ValidErorr/ValidError';

class PhoneNumber extends Component<InputProps, InputState> {
  constructor(props: InputProps) {
    super(props);
    this.state = {
      isValid: true,
    };
  }

  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    !this.state.isValid && this.setState({ isValid: true });
    !this.state.isValid && this.props.validCallback('phoneNumberCheck');
  };

  componentDidUpdate(prevProps: InputProps) {
    if (this.props.isValidation !== prevProps.isValidation) {
      this.setState({ isValid: this.props.isValidation as boolean });
    }
  }

  render() {
    const { isValid } = this.state;

    return (
      <LabelStyled>
        Phone Number
        <input
          ref={this.props.innerRef}
          type="text"
          placeholder="(000) 000 0000"
          onChange={this.handleChange}
        />
        <ValidError isValid={isValid} validMessage="Please, enter Phone Number" />
      </LabelStyled>
    );
  }
}

export default forwardRef<HTMLInputElement, InputProps>((props, ref) => (
  <PhoneNumber
    innerRef={ref}
    validCallback={props.validCallback}
    isValidation={props.isValidation}
  />
));
