import { useContext, useState } from "react";
import axios from "axios";

import Button from "../../components/Button/Button";
import Spinner from "../../components/Spinner/Spinner";
import { UserContext } from "../../components/Layout/Layout";

import {
  ButtonContainer,
  ErrorMessage,
  GetProfileWrapper,
  SuccessMessage,
  Title,
} from "./styles";

function GetProfile() {
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const { setUser } = useContext(UserContext);

  const getUserProfile = async () => {
    setIsLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const result = await axios.get("https://randomuser.me/api/");

      setUser(result.data.results[0]);

      setSuccessMessage(
        "Data successfully retrieved. Go to the profile page.",
      );
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("Failed to retrieve user data.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <GetProfileWrapper>
      <Title>Get Profile</Title>

      <ButtonContainer>
        <Button
          name="GET USER PROFILE"
          onClick={getUserProfile}
        />
      </ButtonContainer>

      {isLoading && <Spinner />}

      {successMessage && (
        <SuccessMessage>{successMessage}</SuccessMessage>
      )}

      {errorMessage && (
        <ErrorMessage>{errorMessage}</ErrorMessage>
      )}
    </GetProfileWrapper>
  );
}

export default GetProfile;
