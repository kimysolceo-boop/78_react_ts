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

import type { InputContextType, LayoutProps } from "./types";

import LogoImg from "../../assets/avatar.jpg";
import { ButtonWrapper } from "../CounterWithState/styles";
import Button from "../Button/Button";

export const InputContext = createContext<InputContextType>({
  data: "",
  onDataChange: () => {},
});

function Layout({ children }: LayoutProps) {
  const [inputResult, setInputResult] = useState<string>("");

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
          </NavContainer>
        </Header>

        <Main>{children}</Main>

        <Footer />
      </LayoutComponent>
    </InputContext.Provider>
  );
}

export default Layout;