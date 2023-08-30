import { FC, ReactNode, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import { ModalPortal } from './ModalPortal';
import { Content, ModalHeader, ModalLabel } from './styles';
import './modal.css';
import { Button } from '../../components';

interface IAddBuildingModal {
  children: ReactNode;
  isOpen: boolean;
  windowName: string;
  handleClose(): void;
}

export const ModalWindow: FC<IAddBuildingModal> = ({ children, isOpen, windowName,  handleClose }) => {
  const nodeRef = useRef(null);
  useEffect(() => {
    const closeOnEscapeKey = (e: KeyboardEvent) => (e.key === 'Escape' ? handleClose() : null);
    document.body.addEventListener('keydown', closeOnEscapeKey);
    return () => {
      document.body.removeEventListener('keydown', closeOnEscapeKey);
    };
  }, [handleClose]);

  return (
    <ModalPortal wrapperId="react-portal-modal-container">
      <CSSTransition in={isOpen} timeout={{ enter: 0, exit: 300 }} unmountOnExit classNames="modal" nodeRef={nodeRef}>
        <div className="modal" ref={nodeRef}>
          <ModalHeader>
            <ModalLabel>{windowName}</ModalLabel>
            <Button onClick={handleClose} label="Close" />
          </ModalHeader>
          <Content>{children}</Content>
        </div>
      </CSSTransition>
    </ModalPortal>
  );
};
