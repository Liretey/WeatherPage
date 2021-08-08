import * as React from 'react';
import styled, { css } from 'styled-components/macro';
import { ReactComponent as DocumentationIcon } from './assets/documentation-icon.svg';
import { ReactComponent as GithubIcon } from './assets/github-icon.svg';
import { WiDayCloudy } from 'react-icons/wi';
import { AiFillHome } from 'react-icons/ai';
import { Link } from 'react-router-dom';

export function Nav() {
  return (
    <Wrapper>
      <NavLink to="/">
        <AiFillHome className="icon" />
        Home
      </NavLink>
      <NavLink to="/weather">
        <WiDayCloudy className="icon" />
        WeatherPage
      </NavLink>
      <Item
        href="https://cansahin.gitbook.io/react-boilerplate-cra-template/"
        target="_blank"
        title="Documentation Page"
        rel="noopener noreferrer"
      >
        <DocumentationIcon />
        Documentation
      </Item>
      <Item
        href="https://github.com/react-boilerplate/react-boilerplate-cra-template"
        target="_blank"
        title="Github Page"
        rel="noopener noreferrer"
      >
        <GithubIcon />
        Github
      </Item>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  display: flex;
  margin-right: -1rem;

  .icon {
    margin-right: 0.25rem;
    height: 1.5rem;
  }
`;

const linkStyles = css`
  color: ${p => p.theme.primary};
  cursor: pointer;
  text-decoration: none;
  display: flex;
  padding: 0.25rem 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  align-items: center;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.4;
  }
`;

const Item = styled.a`
  ${linkStyles}
`;

const NavLink = styled(Link)`
  ${linkStyles}
`;
