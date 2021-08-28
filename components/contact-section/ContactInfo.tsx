import styled from "styled-components";
import Link from "next/link";
import {
  EmailIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  PhoneCallIcon,
  PinIcon,
  TwitterIcon,
} from "../icons";

const ContactInfoList = styled.ul`
  padding: 0;
  list-style: none;

  li {
    margin-bottom: 32px;
    display: flex;
    align-items: center;

    span {
      width: 24px;
      height: 24px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 16px;
    }

    a {
      text-decoration: none;
      font-family: NexaBold, sans-serif;
      font-size: 24px;
      line-height: 24px;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

const ContactSocialIconsList = styled.ul`
  padding: 0;
  list-style: none;
  display: flex;
  margin-top: 94.67px;

  li {
    margin-right: 40px;
    &:last-child {
      margin: 0;
    }

    a svg {
      transition: all 0.3s ease;
      &:hover {
        fill: ${(props) => props.theme.colors.secondary.ecomOrange};
      }
    }
  }
`;

export const ContactInfo = () => (
  <div>
    <ContactInfoList>
      <li>
        <span>
          <PhoneCallIcon />
        </span>
        <Link href="/">
          <a>+2347 088 45 2345</a>
        </Link>
      </li>

      <li>
        <span>
          <PinIcon />
        </span>
        <Link href="/">
          <a>Lekki Phase 1, Lagos, Nigeria.</a>
        </Link>
      </li>

      <li>
        <span>
          <EmailIcon />
        </span>
        <Link href="/">
          <a>ecomapp@gmail.com</a>
        </Link>
      </li>
    </ContactInfoList>

    <ContactSocialIconsList>
      <li>
        <Link href="/">
          <a>
            <InstagramIcon />
          </a>
        </Link>
      </li>

      <li>
        <Link href="/">
          <a>
            <TwitterIcon />
          </a>
        </Link>
      </li>

      <li>
        <Link href="/">
          <a>
            <FacebookIcon />
          </a>
        </Link>
      </li>

      <li>
        <Link href="/">
          <a>
            <LinkedInIcon />
          </a>
        </Link>
      </li>
    </ContactSocialIconsList>
  </div>
);
