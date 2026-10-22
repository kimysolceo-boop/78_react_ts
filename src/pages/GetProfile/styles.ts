import styled from "@emotion/styled";

export const GetProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  flex: 1;
  padding: 40px;
`;

export const Title = styled.h1`
  font-size: 28px;
`;

export const ButtonContainer = styled.div`
  width: 320px;
`;

export const SuccessMessage = styled.p`
  margin: 0;
  font-size: 18px;
  color: green;
  text-align: center;
`;

export const ErrorMessage = styled.p`
  margin: 0;
  font-size: 18px;
  color: red;
  text-align: center;
`;