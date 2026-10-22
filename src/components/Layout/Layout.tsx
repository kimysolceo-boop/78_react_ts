import { createContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  Footer,
  Header,
  LayoutComponent,
  Logo,
  Main,
  NavContainer,
  StyledNavLink,
} from "./styles";

import type {
  InputContextType,
  LayoutProps,
  UserContextType,
} from "./types";

import type { UserProfile } from "../../pages/Profile/types";

import LogoImg from "../../assets/avatar.jpg";
import { ButtonWrapper } from "../CounterWithState/styles";
import Button from "../Button/Button";

export const InputContext = createContext<InputContextType>({
  data: "",
  onDataChange: () => {},
});

export const UserContext = createContext<UserContextType>({
  user: null,
  setUser: () => {},
});


function Layout({ children }: LayoutProps) {
  const [inputResult, setInputResult] = useState<string>("");
  const [user, setUser] = useState<UserProfile | null>(null);

  const navigate = useNavigate();

  const onBack = () => {
    navigate(-1);
  };

  return (
    <InputContext.Provider
      value={{
        data: inputResult,
        onDataChange: setInputResult,
      }}
    >
      <UserContext.Provider
        value={{
          user,
          setUser,
        }}
      >
        <LayoutComponent>
          <Header>
            <Link to="/">
              <Logo src={LogoImg} />
            </Link>

          <ButtonWrapper>
            <Button name="<---" onClick={onBack} />
          </ButtonWrapper>

          <NavContainer>
            <StyledNavLink
              to="/"
              style={({ isActive }) => ({
                textDecoration: isActive ? "underline" : "none",
              })}
            >
              Home
            </StyledNavLink>

            <StyledNavLink
              to="/lesson-5"
              style={({ isActive }) => ({
                textDecoration: isActive ? "underline" : "none",
              })}
            >
              Lesson05
            </StyledNavLink>

            <StyledNavLink
              to="/lesson-6"
              style={({ isActive }) => ({
                textDecoration: isActive ? "underline" : "none",
              })}
            >
              Lesson06
            </StyledNavLink>

            <StyledNavLink
              to="/lesson-7"
              style={({ isActive }) => ({
                textDecoration: isActive ? "underline" : "none",
              })}
            >
              Lesson07
            </StyledNavLink>

            <StyledNavLink
              to="/lesson-8"
              style={({ isActive }) => ({
                textDecoration: isActive ? "underline" : "none",
              })}
            >
              Lesson08
            </StyledNavLink>

            <StyledNavLink
              to="/lesson-9"
              style={({ isActive }) => ({
                textDecoration: isActive ? "underline" : "none",
              })}
            >
              Lesson09
            </StyledNavLink>

            <StyledNavLink
              to="/lesson-10"
              style={({ isActive }) => ({
                textDecoration: isActive ? "underline" : "none",
              })}
            >
              Lesson10
            </StyledNavLink>

            <StyledNavLink
              to="/lesson-12"
              style={({ isActive }) => ({
                textDecoration: isActive ? "underline" : "none",
              })}
            >
              Lesson12
            </StyledNavLink>

            <StyledNavLink
              to="/users"
              style={({ isActive }) => ({
                textDecoration: isActive ? "underline" : "none",
              })}
            >
              Users
            </StyledNavLink>

            <StyledNavLink
              to="/homework-6"
              style={({ isActive }) => ({
                textDecoration: isActive ? "underline" : "none",
              })}
            >
              Homework06
            </StyledNavLink>

            <StyledNavLink
              to="/homework-8"
              style={({ isActive }) => ({
                textDecoration: isActive ? "underline" : "none",
              })}
            >
              Homework08
            </StyledNavLink>

            <StyledNavLink
              to="/homework-10"
              style={({ isActive }) => ({
                textDecoration: isActive ? "underline" : "none",
              })}
            >
              Homework10
            </StyledNavLink>

            <StyledNavLink
              to="/lesson-15"
              style={({ isActive }) => ({
                textDecoration: isActive ? "underline" : "none",
              })}
            >
              Lesson15
            </StyledNavLink>

            <StyledNavLink
              to="/get-profile"
              style={({ isActive }) => ({
                textDecoration: isActive ? "underline" : "none",
            })}
            >
            Get Profile
            </StyledNavLink>

            <StyledNavLink
              to="/profile"
              style={({ isActive }) => ({
                textDecoration: isActive ? "underline" : "none",
            })}
            >
           Profile
           </StyledNavLink>

          </NavContainer>
        </Header>

        <Main>{children}</Main>

        <Footer />
      </LayoutComponent>
    </UserContext.Provider>
    </InputContext.Provider>
  );
}

export default Layout;