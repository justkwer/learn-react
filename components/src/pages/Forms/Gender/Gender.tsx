import React, { ChangeEvent, Component, forwardRef } from 'react';
import { GenderStyled, LabelStyled } from '../styled';
import { SelectProps } from '../Forms.model';
import ValidError from '../../../components/ValidErorr/ValidError';

class Gender extends Component<SelectProps, { isValid: boolean }> {
  constructor(props: SelectProps) {
    super(props);
    this.state = {
      isValid: true,
    };
  }

  handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    !this.state.isValid && this.setState({ isValid: true });
    !this.state.isValid && this.props.validCallback('genderCheck');
  };

  componentDidUpdate(prevProps: SelectProps) {
    if (this.props.isValidation !== prevProps.isValidation) {
      this.setState({ isValid: this.props.isValidation as boolean });
    }
  }

  render() {
    const { isValid } = this.state;

    return (
      <LabelStyled>
        Gender
        <GenderStyled
          ref={this.props.innerRef}
          className="disabled"
          defaultValue="Please Select"
          onChange={this.handleChange}
        >
          <option className="disabled" disabled value="Please Select">
            Please Select
          </option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </GenderStyled>
        <ValidError isValid={isValid} validMessage="Need pick gender" />
      </LabelStyled>
    );
  }
}

export default forwardRef<HTMLSelectElement, SelectProps>((props, ref) => (
  <Gender innerRef={ref} validCallback={props.validCallback} isValidation={props.isValidation} />
));
