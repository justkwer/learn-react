import React, { ChangeEvent, forwardRef, MutableRefObject, useEffect, useState } from 'react';
import { AvatarStyled } from './styled';
import { SvgGenerator } from '../../../components/SvgGenerator/SvgGenerator';
import { InputProps } from '../Forms.model';
import ValidError from '../../../components/ValidErorr/ValidError';

const Avatar = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const [isValid, setIsValid] = useState(true);
  const [imageUrl, setImageUrl] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const image = (ref as MutableRefObject<HTMLInputElement>).current?.files?.item(0);

    const fileReader = new FileReader();

    fileReader.onload = () => {
      setImageUrl(fileReader.result as string);
      setIsValid(true);
    };

    fileReader.readAsDataURL(image as Blob);
    !isValid && setIsValid(true);
    !isValid && props.validCallback('avatarCheck');
  };

  useEffect(() => {
    setIsValid(props.isValidation as boolean);
  }, [props.isValidation]);

  return (
    <AvatarStyled>
      <label>
        <SvgGenerator id="avatar" />
        <span>Upload avatar</span>
        <input
          src={imageUrl as string}
          ref={ref}
          type="file"
          className="hidden"
          onChange={handleChange}
          accept=".jpg, .jpeg, .png"
        />
      </label>
      {(imageUrl as string) !== '' && <img src={imageUrl as string} alt="Avatar" />}
      <ValidError isValid={isValid} validMessage="Need pick avatar" />
    </AvatarStyled>
  );
});

export default Avatar;
