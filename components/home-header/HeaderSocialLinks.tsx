import styled from "styled-components";
import Link from "next/link";

const HeaderSocialLinksWrapper = styled.ul`
  list-style: none;
  display: flex;
  padding-top: 40px;

  li {
    margin-right: 40px;

    a {
      text-transform: uppercase;
      text-decoration: none;
      color: ${(props) => props.theme.colors.primary.ecomBlack};
      font-size: 12px;
      line-height: 12px;
      font-family: NexaBold, sans-serif;
      &:hover {
        color: ${(props) => props.theme.colors.secondary.ecomOrange};
      }
    }
  }

  li:last-child {
    margin-right: 0;
  }
`;

export const HeaderSocialLinks = () => (
  <HeaderSocialLinksWrapper>
    <li>
      <Link href="/">
        <a target="_blank" rel="noopener noreferrer">
          Instagram
        </a>
      </Link>
    </li>
    <li>
      <Link href="/">
        <a target="_blank" rel="noopener noreferrer">
          Twitter
        </a>
      </Link>
    </li>
    <li>
      <Link href="/">
        <a target="_blank" rel="noopener noreferrer">
          Facebook
        </a>
      </Link>
    </li>
    <li>
      <Link href="/">
        <a target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
      </Link>
    </li>
  </HeaderSocialLinksWrapper>
);
