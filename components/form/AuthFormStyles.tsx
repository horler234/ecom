import styled from "styled-components";

export const SignInPageWrapper = styled.main`
  display: flex;
  justify-content: space-between;
`;

export const SignInContainer = styled.div<{ isSignUp: boolean }>`
  padding-top: ${(props) => (props.isSignUp ? "56px" : "113px")};
  padding-left: 140px;

  h1 {
    font-family: NexaBlack, sans-serif;
    font-size: 40px;
    line-height: 40px;
    margin-bottom: 8px;
    text-transform: uppercase;
  }
`;

export const SignInImageWrapper = styled.div<{ isSignUp?: boolean }>`
  width: 588px;
  height: 820px;
  background-color: ${(props) => (props.isSignUp ? "#F7F7F7" : "#fefcf6")};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SignWithGoogleWrapper = styled.div`
  h4 {
    text-transform: uppercase;
    font-family: NexaBold, sans-serif;
    font-size: 16px;
    line-height: 16px;
    margin-bottom: 24px;
    text-align: center;
  }
`;

export const NoAccountWrapper = styled.div<{ isSignUp?: boolean }>`
  text-align: center;
  margin-top: 16px;
  font-size: 12px;
  line-height: 12px;
  font-family: NexaBook, sans-serif;
  ${(props) => !props.isSignUp && `margin-bottom: 42px`};

  a {
    text-decoration: none;
    text-transform: uppercase;
    line-height: 14.4px;
    font-family: NexaRegular, sans-serif;
  }
`;
