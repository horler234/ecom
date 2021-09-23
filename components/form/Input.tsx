import { useState } from "react";
import styled from "styled-components";
import { GlobalMixin } from "../GlobalMixin";
import { GlobalProps } from "../GlobalProps";
import { EyeIcon, EyeOffIcon } from "../icons";
import { HiddenLabel } from "./HiddenLabel";

interface FormProps extends GlobalProps {
  isPassword?: boolean;
}

const InputWrapper = styled.div<FormProps>`
  width: ${(props) => props.widthSmall};
  padding: 0 16px;
  display: flex;
  align-items: center;
  border: 2px solid #a3a3a3;
  border-radius: 8px;
  ${(props) => props.isPassword && "justify-content: space-between;"}
  input {
    width: ${(props) => (props.isPassword ? "90%" : "100%")};
    border: none;
    padding: 29px 0 26px;
    background: none;
    font-size: 16px;
    line-height: 18.75px;
    font-family: inherit;
    ${(props) =>
      !props.isPassword &&
      `&::-webkit-input-placeholder {
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
    }`}
  }

  @media ${(props) => props.theme.media.tablet} {
    width: ${(props) => props.widthLarge};
  }

  ${GlobalMixin}
`;

const PasswordButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

/**
 * InputProps contains the props used in the input components
 * @param label label text
 * @param placeholder placeholder text in the input field
 * @param text input value
 * @param id id of the input and also the "for" attribute of the label
 * @param widthSmall width of input from tablet mini to the smallest screen size
 * @param widthLarge width of input from tablet mini to the largest screen size
 * @param onChange function fired when a user types in the input field
 */

interface InputProps extends GlobalProps {
  label: string;
  placeholder: string;
  id: string;
  widthSmall?: string;
  widthLarge?: string;
  onChange?: (evt: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: (evt: React.MouseEvent<HTMLInputElement>) => void;
  type?: string;
  value?: string;
  onBlur?: (evt: React.FocusEvent<HTMLInputElement>) => void;
  isPassword?: boolean;
}

export const Input = ({
  onChange,
  onClick,
  onBlur,
  label,
  placeholder,
  widthLarge,
  widthSmall,
  id,
  type,
  value,
  isPassword,
  margin,
  marginBottom,
  marginLeft,
  marginRight,
  marginTop,
  padding,
  padBottom,
  padLeft,
  padRight,
  padTop,
}: InputProps) => {
  const [isHidden, setIsHidden] = useState(true);
  return (
    <InputWrapper
      widthSmall={widthSmall}
      widthLarge={widthLarge}
      margin={margin}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      marginRight={marginRight}
      marginTop={marginTop}
      padding={padding}
      padBottom={padBottom}
      padLeft={padLeft}
      padRight={padRight}
      padTop={padTop}
      isPassword={isPassword}
    >
      <HiddenLabel>{label}</HiddenLabel>
      <input
        type={isPassword ? (isHidden ? "password" : "text") : type || "text"}
        id={id}
        placeholder={isPassword ? "Password" : placeholder}
        onChange={onChange}
        value={value}
        onClick={onClick}
        onBlur={onBlur}
      />
      {isPassword && (
        <PasswordButton type="button" onClick={() => setIsHidden(!isHidden)}>
          {isHidden ? (
            <EyeIcon iconColor="#A3A3A3" />
          ) : (
            <EyeOffIcon iconColor="#A3A3A3" />
          )}
        </PasswordButton>
      )}
    </InputWrapper>
  );
};
