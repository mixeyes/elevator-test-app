import { FC, ReactNode, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import { ModalPortal } from './ModalPortal';
import { Content } from './styles';
import './modal.css';
import { Button } from '../../components';

interface IAddBuildingModal {
    children: ReactNode;
    isOpen: boolean;
    handleClose(): void;
}

export const AddBuildingModal: FC<IAddBuildingModal> = ({ children, isOpen, handleClose }) => {
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
      <CSSTransition in={isOpen} timeout={{ entry: 0, exit: 300 }} unmountOnExit classNames="modal" nodeRef={nodeRef}>
        <div className="modal" ref={nodeRef}>
          <Button onClick={handleClose} label="Close" />
          <Content>{children}</Content>
        </div>
      </CSSTransition>
    </ModalPortal>
  );
}
