import styled from 'styled-components';

export const ModalHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 10vh;
  width: 45vw;
`;

export const Content = styled.div`
  width: 50vw;
  height: 50vh;
  background-color: #282c34;
  color: #fff;
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: space-between;
  font-size: 2rem;
`;

export const ModalLabel = styled.h3`
  font-size: 5vh;
  line-height: 1.1;
`;

export const Modal = styled.div`
  position: fixed;
  inset: 0; /* inset sets all 4 values (top right bottom left) much like how we set padding, margin etc., */
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  z-index: 999;
  padding: 10vh;
  opacity: 0;
  pointer-events: none;
  transform: scale(0.4);

  &.modal-enter-done {
    opacity: 1;
    pointer-events: auto;
    transform: scale(1);
  }
  &.modal-exit {
    opacity: 0;
    transform: scale(0.4);
  }
`;
