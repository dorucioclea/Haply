import React, { Component } from "react";
import styled from "styled-components";
import Close from "@material-ui/icons/Close";

const Shadow = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ExitEvent = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
`;

const Details = styled.div`
  width: 70%;
  background-color: white;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  justify-content: space-between;
  z-index: 3;
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 20px;
`;

const PopupButton = styled.button`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--primary);
  border: solid 1px var(--primary);
  padding: 17px;
  font-size: 16px;
  font-weight: 400;
  border-radius: 10px;
  background-color: white;
  outline: none;
  margin-top: 20px;
`;

type Props = {
  content: JSX.Element;
  showButton: boolean;
  closePopup: () => void;
};

export default class Popup extends Component<Props> {
  render() {
    return (
      <Shadow>
        <ExitEvent onClick={() => this.props.closePopup()} />
        <Details>
          <Header>
            <Close onClick={() => this.props.closePopup()} />
          </Header>
          {this.props.content}
          {this.props.showButton && (
            <PopupButton onClick={() => this.props.closePopup()}>
              Done
            </PopupButton>
          )}
        </Details>
      </Shadow>
    );
  }
}
