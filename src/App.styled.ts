import styled from 'styled-components';

// Styles for App component

export const StyledApp = styled.div`
  width: 100%;
  background-color: black;
  color: white;
  font-family: Inter, sans-serif;
`;

export const Form = styled.form`
  margin: 0 auto;
  max-width: 980px;
`;

export const TextArea = styled.textarea`
  width: 580px;
  height: 155px;
  &:focus {
    outline: 0;
  }
`;

export const Button = styled.button`
  width: 210px;
  height: 70px;
  background-color: black;
  border: 1px solid white;
  color: white;
  font-size: 24px;
  font-weight: bold;
  margin: 0 10px;
  cursor: pointer;
  transition: all 0.2s linear;

  &:hover {
    background-color: white;
    color: black;
    transition: all 0.2s linear;
  }
  &:focus {
    outline: 0;
  }
`;

export const CustomizeSection = styled.div`
  padding-top: 70px;
  padding-bottom: 80px;
  border-top: 2px solid #c4c4c4;
`;

export const InputRow = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  justify-content: space-between;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-flow: column nowrap;
  padding-top: 10px;
`;

export const Label = styled.label`
  padding-bottom: 15px;
  font-size: 18px;
  line-height: 22px;
  font-weight: bold;
`;

export const Input = styled.input`
  padding: 15px;
  border: 1px solid white;
  background-color: black;
  color: white;
  text-outline: none;
  font-weight: bold;
  font-size: 18px;
  &:focus {
    outline: 0;
  }
`;

export const SpacedInput = styled(Input)`
  letter-spacing: 0.1em;
`;

export const SectionInfo = styled.div`
  display: flex;
  justify-content: center;
  button {
    width: 360px;
  }
`;

export const CopyCode = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-top: 100px;
  color: black;
  padding-bottom: 80px;
  button {
    margin-left: 30px;
  }
`;

export const CheckBoxSection = styled.div`
  padding-bottom: 50px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
`;

export const CheckBox = styled.input`
  margin-right: 20px;
`;

export const CheckBoxLabel = styled.span`
  font-size: 18px;
  line-height: 22px;
  font-weight: bold;
`;

export const UsedByContainer = styled.div`
  max-width: 600px;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 50px;
`;

export const Domains = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  a {
    color: white;
    margin-right: 10px;
  }
`;
