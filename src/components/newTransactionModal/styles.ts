import styled from "styled-components";
import { darken } from "polished";

export const Container = styled.form`
  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;

    border: 1px solid transparent;
    background: ${props => props.theme.colors.inputBackground};
    color: ${props => props.theme.colors.inverted};
    font-weight: 600;

    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
      color: ${props => props.theme.colors.textBody};;
    }

    & + input {
      margin-top: 1rem;
    }
  }
  button[type="submit"] {
    width: 100%;
    padding: 0 0.15rem;
    height: 4rem;
    background: var(--blue);
    color: #fff;
    border-radius: 0.25rem;
    border: 0;
    font-size: 1rem;
    margin-top: 1.5rem;
    font-weight: 600;
    transition: background-color 0.2s;

    &:hover {
      background-color: ${darken(0.2, `#5429CC`)};
      transition: background-color 0.2s;
    }
  }
`;

export const TranscationTypeContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
`;

interface RadioBoxProps{
  isActive: boolean;
  activeColor: "green" | "red";
}

const colors = {
 green: 'rgba(18, 164, 84, 0.1)',
 red: 'rgba(229, 46, 77, 0.1)'
};

const borderColors = {
  green: '#33cc95',
  red: '#E52E4D'
 };

export const RadioBox = styled.button <RadioBoxProps>`
  height: 4rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: border-color 0.3s;

  background: ${(props) => props.isActive ? colors[props.activeColor] : props.theme.colors.inputBackground};
  border-color: ${(props) => props.isActive ? borderColors[props.activeColor] : 'transparent'};

  /* &:nth-child(1){
    background: ${(props) => props.isActive ? 'rgba(18, 164, 84, 0.1)' : '#e7e9ee'};
    border-color: ${(props) => props.isActive ? 'var(--green)' : 'transparent'};
  }

  &:nth-child(2){
    background: ${(props) => props.isActive ? 'rgba(229, 46, 77, 0.1)' : '#e7e9ee'};
    border-color: ${(props) => props.isActive ? 'var(--red)' : 'transparent'};
  } */

  &:nth-child(1):hover {
    border-color: var(--green);
    transition: border-color 0.3s;
  }

  &:nth-child(2):hover {
    border-color: var(--red);
    transition: border-color 0.3s;
  }

  img {
    width: 1.8rem;
    height: 1.8rem;
  }

  span {
    display: inline-block;
    margin-left: 1rem;
    font-size: 1rem;
    color: var(--text-title);
  }
`;
