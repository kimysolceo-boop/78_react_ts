import styled from "@emotion/styled";

export const ProfileWrapper = styled.div`
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

export const ProfileCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
  width: 360px;
  padding: 30px;
  background-color: white;
  border: 2px solid rgb(65, 65, 210);
  border-radius: 10px;
`;

export const UserImage = styled.img`
  width: 140px;
  height: 140px;
  border-radius: 50%;
`;

export const UserName = styled.h2`
  margin: 0;
  font-size: 24px;
`;

export const UserInfo = styled.p`
  margin: 0;
  font-size: 16px;
`;