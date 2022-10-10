import React, { ChangeEvent, Component, forwardRef } from 'react';
import { LabelStyled } from '../styled';
import { InputProps, InputState } from '../Forms.model';
import ValidError from '../../../components/ValidErorr/ValidError';

class LastName extends Component<InputProps, InputState> {
  constructor(props: InputProps) {
    super(props);
    this.state = {
      isValid: true,
    };
  }

  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    !this.state.isValid && this.setState({ isValid: true });
    !this.state.isValid && this.props.validCallback('lastNameCheck');
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
        Last Name
        <input
          ref={this.props.innerRef}
          type="text"
          placeholder="Snow"
          onChange={this.handleChange}
        />
        <ValidError isValid={isValid} validMessage="Please, enter Last Name" />
      </LabelStyled>
    );
  }
}

export default forwardRef<HTMLInputElement, InputProps>((props, ref) => (
  <LastName innerRef={ref} validCallback={props.validCallback} isValidation={props.isValidation} />
));
