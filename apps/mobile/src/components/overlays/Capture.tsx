import React, { Component } from "react";
import Mood from "../../models/mood";
import styled from "styled-components";

const StyledCapture = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-evenly;
`;

const Button = styled.button`
  height: 100%;
  margin: 5px;
`;

type Props = {
  closeCapture: () => void;
};

export default class Capture extends Component<Props> {
  woof(): void {
    this.props.closeCapture();
  }

  meow(moodValue: number): void {
    const mood: Mood = new Mood(moodValue);
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: mood.string,
    };
    fetch(
      "https://us-central1-happiness-software.cloudfunctions.net/webApi/api/moods",
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => this.woof());
  }

  render() {
    return (
      <StyledCapture data-testid="Capture">
        <Button onClick={() => this.meow(10)}>10</Button>
        <Button onClick={() => this.meow(9)}>9</Button>
        <Button onClick={() => this.meow(8)}>8</Button>
        <Button onClick={() => this.meow(7)}>7</Button>
        <Button onClick={() => this.meow(6)}>6</Button>
        <Button onClick={() => this.meow(5)}>5</Button>
        <Button onClick={() => this.meow(4)}>4</Button>
        <Button onClick={() => this.meow(3)}>3</Button>
        <Button onClick={() => this.meow(2)}>2</Button>
        <Button onClick={() => this.meow(1)}>1</Button>
      </StyledCapture>
    );
  }
}
