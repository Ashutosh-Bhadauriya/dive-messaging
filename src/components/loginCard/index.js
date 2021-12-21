import React from "react";
import { Image, LoginBtn, LoginCard, LoginContainer } from "./styles/loginCard";
import { auth, provider } from "../../firebase";

const loginCard = ({ children, showLoginBtn = true, ...restProps }) => {
  const handleSignIn = () => {
    auth.signInWithPopup(provider).catch(alert);
  };
  return (
    <LoginContainer>
      {showLoginBtn && (
        <LoginCard>
          <Image src="images/login.svg" />
          <LoginBtn onClick={handleSignIn}>Login By Your Gmail</LoginBtn>
        </LoginCard>
      )}
    </LoginContainer>
  );
};
export default loginCard;
