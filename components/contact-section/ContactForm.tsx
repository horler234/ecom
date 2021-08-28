import styled from "styled-components";

const ContactFormContainer = styled.div`
  h4 {
    font-size: 18px;
    line-height: 18px;
    font-family: NexaBold, sans-serif;
    text-transform: uppercase;
    margin-bottom: 16px;
  }

  p {
    font-family: NexaBook, sans-serif;
    font-size: 14px;
    line-height: 18.24px;
    color: #666;
    width: 275px;
  }
`;

const ContactFormWrapper = styled.form`
  width: 427px;
  margin-top: 22px;

  input {
    width: 100%;
    border: 1px solid #666;
    padding: 28px 16px;
    padding-bottom: 23px;
    border-radius: 8px;
    font-size: 16px;
    line-height: 18.75px;
    font-family: inherit;
    margin-bottom: 24px;
    &::-webkit-input-placeholder {
      font-style: italic;
    }
    &:-moz-placeholder {
      font-style: italic;
    }
    &::-moz-placeholder {
      font-style: italic;
    }
    &:-ms-input-placeholder {
      font-style: italic;
    }
  }

  button {
    width: 100%;
    padding: 29px;
    background: #1a1a1a;
    border-radius: 8px;
    border: transparent;
    cursor: pointer;
    font-family: NexaBold, sans-serif;
    text-transform: uppercase;
    color: #fff;
    font-size: 16px;
    line-height: 16px;
  }
`;

export const ContactForm = () => (
  <ContactFormContainer>
    <h4>Subscribe to our Newsletter</h4>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit mattis
      vehicula et{" "}
    </p>

    <ContactFormWrapper>
      <input type="text" placeholder="Email" />
      <button>Subscribe</button>
    </ContactFormWrapper>
  </ContactFormContainer>
);
