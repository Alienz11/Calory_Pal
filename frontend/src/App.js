import styled from "styled-components";
import { AnimationBox } from "./components/animationBox/Animation";

const AppContainer = styled.div`
  height: 50em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function App() {
  return (
    <AppContainer>
      <AnimationBox />
    </AppContainer>
  );
}

export default App;
