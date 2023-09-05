import React, { FC } from "react";
// import './closeButtonStyles.css';
import { OnClickFunction } from "../../../../utils/intefaces";
import { Button, Container } from "./styles";

interface ICloseButton {
  onClick: OnClickFunction
}
export const CloseButton: FC<ICloseButton> = ({ onClick }) => {
    return (
      <Container>
        <Button type="button" className="btn-close" onClick={onClick}>
          <span className="icon-cross"></span>
          {/* <span className="visually-hidden">Close</span> */}
        </Button>
      </Container>
    );
}
