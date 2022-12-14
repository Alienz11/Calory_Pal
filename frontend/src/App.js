import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import styled from "styled-components";
import { AnimationBox } from "./components/animationBox/Animation";
import Navbar from "./components/Navbar";
import { useAuthContext } from "./hooks/useAuthContext";
import HomePage from "./pages/HomePage";

const AppContainer = styled.div`
  height: 40em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function App() {
  const { user } = useAuthContext();
  console.log(user);
  return (
    <BrowserRouter>
      <Navbar />
      <div className="pages">
        <Routes>
          <Route
            path="/"
            element={user ? <HomePage /> : <Navigate to="/login" />}
          />
          <Route
            path="/login"
            element={
              !user ? (
                <AppContainer>
                  <AnimationBox />
                </AppContainer>
              ) : (
                <Navigate to="/" />
              )
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
