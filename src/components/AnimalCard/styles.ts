import styled from "@emotion/styled";

export const AnimalCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 280px;
  padding: 20px;
  background-color: white;
  border: 2px solid rgb(46, 13, 81);
  border-radius: 12px;
  box-sizing: border-box;
`;

export const AnimalCardTitle = styled.h3`
  margin: 0;
  font-size: 24px;
  color: rgb(46, 13, 81);
`;

export const AnimalCardImage = styled.img`
  width: 240px;
  height: 180px;
  object-fit: cover;
  border-radius: 8px;
`;