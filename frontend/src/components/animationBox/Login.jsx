import React, { useContext } from "react";
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
  const { switchToSignup } = useContext(AnimationContext);

  return (
    <Container>
      <FormContainer>
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <MutedLink href="#">Forget your password?</MutedLink>
      <Marginer direction="vertical" margin="1.6em" />
      <SubmitButton type="submit">Login</SubmitButton>
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
