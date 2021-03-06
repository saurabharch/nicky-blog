import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { TABLET_WIDTH } from 'typography-breakpoint-constants';
import { rhythm } from '../../utils/typography';

const Container = styled.header`
  position: relative;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: ${rhythm(2)};
  background: #333;
  color: #bbb;
  z-index: 100;
  a {
    text-shadow: none;
    background-image: none;
    text-decoration: none;
    color: inherit;
    border: none;
    box-shadow: none;
  }
  a:hover {
    background: transparent;
  }
  @media (min-width: ${TABLET_WIDTH}) {
    grid-template-columns: 1fr auto 1fr;

    grid-template-rows: ${rhythm(3)};
  }
  filter: drop-shadow(rgba(0, 0, 0, 0.5) 2px 1px 10px);
`;

const Nav = styled.div`
  grid-column: 2/3;
  grid-row: 1/2;
  align-self: center;
  ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  li {
    margin: 0;
    margin-left: ${rhythm(1 / 2)};
  }
  a {
    position: relative;
    &:after {
      height: 3px;
      background: ${props => props.theme.primaryLight};
      content: '';
      width: 0;
      position: absolute;
      /* hover OFF */
      transition: width 0.3s;
      transition-timing-function: cubic-bezier(
        0.95,
        0.05,
        0.795,
        0.035
      ); /* easeInExpo */
      left: 0%;
      bottom: -${rhythm(1 / 8)};
    }
    &:hover,
    &:focus,
    &.is-active {
      color: #eee;
      outline: none;
      &:after {
        /* hover ON */
        width: 100%;
        transition-timing-function: cubic-bezier(
          0.19,
          1,
          0.22,
          1
        ); /* easeOutExpo */
      }
    }
  }
  @media (min-width: ${TABLET_WIDTH}) {
    grid-column: 1/2;
    grid-row: 1/2;
    justify-self: end;
    li {
      margin-left: ${rhythm(1)};
    }
  }
`;

const Logo = styled.div`
  grid-column: 1/2;
  grid-row: 1/2;
  transform: translateY(20%);
  align-self: center;
  padding: 0;
  border: 5px solid #333;
  border-radius: 20%;
  background-color: #999;
  width: ${rhythm(2)};
  height: ${rhythm(2)};
  padding: ${rhythm(1 / 4)};
  margin: 0 ${rhythm(0.5)};
  @media (min-width: ${TABLET_WIDTH}) {
    grid-column: 2/3;
    grid-row: 1/2;
    border-radius: 50%;
    margin: 0 ${rhythm(1)};
    width: ${rhythm(4)};
    height: ${rhythm(4)};
    padding: ${rhythm(1 / 2)};
    transform: translateY(25%);
  }
  a:hover {
    background: transparent;
    border: none;
    box-shadow: none;
  }
`;

const Social = styled.div`
  justify-self: start;
  align-self: center;
  display: none;
  ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  a {
    display: flex;
    align-self: center;
    color: inherit;
    text-decoration: none;
  }
  a:hover svg {
    fill: #eee;
  }
  li {
    display: flex;
    align-self: center;
    margin: 0;
    margin-right: ${rhythm(1 / 2)};
  }
  svg {
    fill: #bbb;
    width: ${rhythm(3 / 4)};
    height: ${rhythm(3 / 4)};
  }
  @media (min-width: ${TABLET_WIDTH}) {
    display: block;
    grid-column: 3/4;
    grid-row: 1/2;
    li {
      margin-right: ${rhythm(1)};
    }
    svg {
      width: ${rhythm(1)};
      height: ${rhythm(1)};
    }
  }
`;

const Header = () => (
  <Container>
    <Nav>
      <ul>
        <li>
          <Link to="/" activeClassName="is-active">
            Home
          </Link>
        </li>
        <li>
          <Link to="/blog" activeClassName="is-active">
            Blog
          </Link>
        </li>
        <li>
          <Link to="/about" activeClassName="is-active">
            About
          </Link>
        </li>
      </ul>
    </Nav>
    <Logo>
      <Link to="/" aria-label="Home">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.0"
          viewBox="0 0 504 504"
        >
          <path d="M 90,430.5 L 90,412 L 102.5,412 L 115,412 L 115,390.6452 L 115,369.29041 L 136,346.9288 L 157,324.56719 L 157,250.00884 L 157,175.45049 L 132.55624,156.97524 L 108.11248,138.5 L 108.05624,104.75 L 108,71 L 136.5,71 L 165,71 L 165,86 L 165,101 L 191,101 L 217,101 L 217,86 L 217,71 L 252,71 L 287,71 L 287,86 L 287,101 L 313,101 L 339,101 L 339,86 L 339,71 L 367.5,71 L 396,71 L 395.94794,104.75 L 395.89588,138.5 L 371.44945,157 L 347.00303,175.5 L 347.00151,250.19619 L 347,324.89237 L 367.97107,347.19619 L 388.94214,369.5 L 388.97107,390.75 L 389,412 L 401.5,412 L 414,412 L 414,430.5 L 414,449 L 252,449 L 90,449 L 90,430.5 z M 379.73331,417.03383 C 383.68969,413.3479 383.42932,408.61599 379.08666,405.2818 C 377.85933,404.33949 349.06386,404.0564 251.93856,404.0318 C 128.45676,404.00053 126.34217,404.03257 124.26669,405.96617 C 120.31031,409.6521 120.57068,414.38401 124.91334,417.7182 C 126.14067,418.66051 154.93614,418.9436 252.06144,418.9682 C 375.54324,418.99947 377.65783,418.96743 379.73331,417.03383 z M 379.73331,375.03383 C 383.68969,371.3479 383.42932,366.61599 379.08666,363.2818 C 377.85933,362.33949 349.06386,362.0564 251.93856,362.0318 C 128.45676,362.00053 126.34217,362.03257 124.26669,363.96617 C 120.31031,367.6521 120.57068,372.38401 124.91334,375.7182 C 126.14067,376.66051 154.93614,376.9436 252.06144,376.9682 C 375.54324,376.99947 377.65783,376.96743 379.73331,375.03383 z M 337.54545,329.54545 C 340.67373,326.41718 340.67373,322.58282 337.54545,319.45455 L 335.09091,317 L 252,317 L 168.90909,317 L 166.45455,319.45455 C 163.32627,322.58282 163.32627,326.41718 166.45455,329.54545 L 168.90909,332 L 252,332 L 335.09091,332 L 337.54545,329.54545 z M 337.54545,180.54545 C 340.67373,177.41718 340.67373,173.58282 337.54545,170.45455 L 335.09091,168 L 252,168 L 168.90909,168 L 166.45455,170.45455 C 163.32627,173.58282 163.32627,177.41718 166.45455,180.54545 L 168.90909,183 L 252,183 L 335.09091,183 L 337.54545,180.54545 z M 387.54545,142.54545 C 390.67373,139.41718 390.67373,135.58282 387.54545,132.45455 L 385.09091,130 L 252,130 L 118.90909,130 L 116.45455,132.45455 C 113.32627,135.58282 113.32627,139.41718 116.45455,142.54545 L 118.90909,145 L 252,145 L 385.09091,145 L 387.54545,142.54545 z " />
        </svg>
      </Link>
    </Logo>
    <Social>
      <ul>
        <li>
          <a href="https://github.com/NickyMeuleman" aria-label="Github">
            {/* Icon from https://github.com/konpa/devicon/blob/87be6bdf431d7ca54c18b1d0c715cb21553553ee/icons/github/github-original.svg */}
            <svg viewBox="0 0 128 128">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"
              />
              <path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm-.743-.55M28.93 94.535c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zm-.575-.618M31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm0 0M34.573 101.373c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm0 0M39.073 103.324c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm0 0M44.016 103.685c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm0 0M48.614 102.903c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0" />
            </svg>
          </a>
        </li>
        <li>
          <a href="https://twitter.com/NMeuleman" aria-label="Twitter">
            {/* Icon from https://github.com/konpa/devicon/blob/158fbb74b56f26b37c63c5118d58f6f6d6121e6a/icons/twitter/twitter-original.svg */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 126.24 102.59">
              <path
                d="M40.58,115.3c47.64,0,73.69-39.47,73.69-73.69,0-1.12,0-2.24-.07-3.35a52.7,52.7,0,0,0,12.92-13.41,51.7,51.7,0,0,1-14.87,4.08A26,26,0,0,0,123.63,14.6a51.9,51.9,0,0,1-16.45,6.29A25.92,25.92,0,0,0,63.05,44.51,73.53,73.53,0,0,1,9.67,17.45a25.92,25.92,0,0,0,8,34.58A25.71,25.71,0,0,1,6,48.78c0,.11,0,.22,0,.33A25.91,25.91,0,0,0,26.73,74.5a25.86,25.86,0,0,1-11.7.44,25.93,25.93,0,0,0,24.2,18A52,52,0,0,1,7.06,104a52.72,52.72,0,0,1-6.18-.36,73.32,73.32,0,0,0,39.7,11.63"
                transform="translate(-0.88 -12.7)"
              />
            </svg>
          </a>
        </li>
        <li>
          <a href="mailto:nicky.meuleman+dev@gmail.com" aria-label="e-mail">
            {/* Icon from https://fontawesome.com/icons/envelope?style=solid
          license https://creativecommons.org/licenses/by/4.0/ */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z" />
            </svg>
          </a>
        </li>
      </ul>
    </Social>
  </Container>
);

export default Header;
