import { useContext } from "react";
import { UserContext } from "../../components/Layout/Layout";

import {
  ProfileWrapper,
  Title,
  ProfileCard,
  UserImage,
  UserName,
  UserInfo,
} from "./styles";

function Profile() {
  const { user } = useContext(UserContext);

  return (
    <ProfileWrapper>
      <Title>Profile</Title>

      {!user && <UserInfo>No user data. Go to Get Profile page.</UserInfo>}

      {user && (
        <ProfileCard>
          <UserName>
            {user.name.first} {user.name.last}
          </UserName>

          <UserImage
            src={user.picture.large}
            alt={`${user.name.first} ${user.name.last}`}
          />

          <UserInfo>Gender: {user.gender}</UserInfo>
          <UserInfo>Email: {user.email}</UserInfo>
          <UserInfo>Country: {user.location.country}</UserInfo>
          <UserInfo>Phone: {user.phone}</UserInfo>
        </ProfileCard>
      )}
    </ProfileWrapper>
  );
}
export default Profile;