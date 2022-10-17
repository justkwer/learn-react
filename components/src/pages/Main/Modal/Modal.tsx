import React, { useEffect } from 'react';
import { ModalProps } from './Modal.model';
import { createPortal } from 'react-dom';
import { ModalForm, ModalWrapper } from './styled';
import { SvgGenerator } from '../../../components/SvgGenerator/SvgGenerator';
import ModalInfo from './ModalInfo';

const modalRoot = document.getElementById('modal') as HTMLElement;

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
    <ModalWrapper onClick={() => setModalId('')}>
      <ModalForm onClick={(e) => e.stopPropagation()}>
        <button onClick={() => setModalId('')}>
          <SvgGenerator id="btn" />
        </button>
        <ModalInfo id={id} />
      </ModalForm>
    </ModalWrapper>,
    el
  );
};

export default Modal;
