import React from 'react';
import { ModalInfoGeneratorStyled } from './styled';

const ModalInfoGenerator = ({ info }: { info: (string | undefined)[] }) => {
  return (
    <ModalInfoGeneratorStyled>
      <span>{info[0]}:&nbsp;</span>
      <p>{info[1]}.</p>
    </ModalInfoGeneratorStyled>
  );
};

export default ModalInfoGenerator;
