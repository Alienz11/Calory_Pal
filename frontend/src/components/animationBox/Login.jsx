import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useLogin } from "../../hooks/useLogin";
import {
  Container,
  BoldLink,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./Collective";
import { Marginer } from "../marginer/marginMaker";

import { AnimationContext } from "./animationContext";

export function LoginForm(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLoading, error } = useLogin();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await login(email, password);
    navigate("/");
  };
  const { switchToSignup } = useContext(AnimationContext);
  return (
    <Container onSubmit={handleSubmit}>
      <FormContainer>
        <Input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="Email"
        />
        <Input
          placeholder="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        {error && <div className="error">{error}</div>}
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <MutedLink href="#">Forget your password?</MutedLink>
      <Marginer direction="vertical" margin="1.6em" />
      <SubmitButton type="submit" disabled={isLoading}>
        Login
      </SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Don't have an account?{" "}
        <BoldLink href="#" onClick={switchToSignup}>
          Signup
        </BoldLink>
      </MutedLink>
    </Container>
  );
}
