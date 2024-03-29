import React, { useEffect } from 'react';
import { ModalProps } from './Modal.model';
import { createPortal } from 'react-dom';
import { ModalStyled, WrapperStyled } from './styled';
import { SvgGenerator } from '../../../components/SvgGenerator/SvgGenerator';
import ModalInfo from './ModalInfo/ModalInfo';

const modalRoot = document.getElementById('modal') as HTMLDivElement;

const Modal = (props: ModalProps) => {
  const el = document.createElement('div');
  const { id, setModalId } = props;

  useEffect(() => {
    modalRoot.append(el);
    return () => {
      modalRoot.removeChild(el);
    };
  });

  return createPortal(
    <ModalStyled onClick={() => setModalId('')}>
      <WrapperStyled onClick={(e) => e.stopPropagation()}>
        <button onClick={() => setModalId('')}>
          <SvgGenerator id="btn" />
        </button>
        <ModalInfo id={id} />
      </WrapperStyled>
    </ModalStyled>,
    el
  );
};

export default Modal;
