import React, { ChangeEvent, Component, forwardRef, MutableRefObject } from 'react';
import { AvatarStyled } from './styled';
import { SvgGenerator } from '../../../components/SvgGenerator/SvgGenerator';
import { AvatarState, InputProps } from '../Forms.model';
import ValidError from '../../../components/ValidErorr/ValidError';

class Avatar extends Component<InputProps, AvatarState> {
  constructor(props: InputProps) {
    super(props);

    this.state = {
      isValid: true,
      imageUrl: '',
    };
  }

  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const image = (this.props.innerRef as MutableRefObject<HTMLInputElement>).current?.files?.item(
      0
    );

    const fileReader = new FileReader();

    fileReader.onload = () => {
      this.setState({
        imageUrl: fileReader.result,
        isValid: true,
      });
    };

    fileReader.readAsDataURL(image as Blob);
    !this.state.isValid && this.setState({ isValid: true });
    !this.state.isValid && this.props.validCallback('avatarCheck');
  };

  componentDidUpdate(prevProps: InputProps) {
    if (this.props.isValidation !== prevProps.isValidation) {
      this.setState({ isValid: this.props.isValidation as boolean });
    }
  }

  render() {
    const { imageUrl, isValid } = this.state;
    return (
      <AvatarStyled>
        <label>
          <SvgGenerator id="avatar" />
          <span>Upload avatar</span>
          <input
            src={imageUrl as string}
            ref={this.props.innerRef}
            type="file"
            className="hidden"
            onChange={this.handleChange}
            accept=".jpg, .jpeg, .png"
          />
        </label>
        {(imageUrl as string) !== '' && <img src={imageUrl as string} alt="Avatar" />}
        <ValidError isValid={isValid} validMessage="Need pick avatar" />
      </AvatarStyled>
    );
  }
}

export default forwardRef<HTMLInputElement, InputProps>((props, ref) => (
  <Avatar innerRef={ref} validCallback={props.validCallback} isValidation={props.isValidation} />
));
