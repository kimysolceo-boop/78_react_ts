import { useState, type ChangeEvent } from "react";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import {
  PageWrapper,
  Homework08Wrapper,
  InputsContainer,
  Title,
  ResultBlock,
} from "./styles";

function Homework08() {
  const [value1, setValue1] = useState("");
  const [result1, setResult1] = useState("");

  const onChangeValue1 = (event: ChangeEvent<HTMLInputElement>) => {
    setValue1(event.target.value);
  };

  const [value2, setValue2] = useState("");
  const [result2, setResult2] = useState("");

  const onChangeValue2 = (event: ChangeEvent<HTMLInputElement>) => {
    setValue2(event.target.value);
  };

  const getResult = () => {
    setResult1(value1);
    setResult2(value2);
  };

  return (
    <PageWrapper>
      <Homework08Wrapper>
        <Title>Homework 08</Title>

        <InputsContainer>
          <Input
            name="value1"
            label="Value 1"
            placeholder="Enter first value"
            id="id_value_1"
            value={value1}
            onChange={onChangeValue1}
          />

          <Input
            name="value2"
            label="Value 2"
            placeholder="Enter second value"
            id="id_value_2"
            value={value2}
            onChange={onChangeValue2}
          />

          <Button name="Get result" onClick={getResult} />
        </InputsContainer>

        {result1 && <ResultBlock>Result 1: {result1}</ResultBlock>}
        {result2 && <ResultBlock>Result 2: {result2}</ResultBlock>}
      </Homework08Wrapper>
    </PageWrapper>
  );
}

export default Homework08;