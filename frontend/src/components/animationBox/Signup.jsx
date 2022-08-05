import React, { useContext } from "react";
import {
  BoldLink,
  Container,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./Collective";
import { Marginer } from "../marginer/marginMaker";
import { AnimationContext } from "./animationContext";

export function SignupForm(props) {
  const { switchToLogin } = useContext(AnimationContext);

  return (
    <Container>
      <FormContainer>
        <Input type="text" placeholder="Full Name" />
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Input type="password" placeholder="Confirm Password" />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <SubmitButton type="submit">Signup</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Already have an account?
        <BoldLink href="#" onClick={switchToLogin}>
          Login
        </BoldLink>
      </MutedLink>
    </Container>
  );
}
