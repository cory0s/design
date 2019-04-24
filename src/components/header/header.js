import React from "react";

const Header = props => {
  return (
    <header>
      <h1>{props.title}</h1>
      {props.children}
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
            <ul>
              <li>
                <a href="/">Stuff</a>
              </li>
              <li>
                <a href="/">Stuff</a>
              </li>
              <li>
                <a href="/">Stuff</a>
              </li>
            </ul>
          </li>

          <li>
            <a href="/">Vacation</a>
            <ul>
              <li>
                <a href="/">Stuff</a>
              </li>
              <li>
                <a href="/">Stuff</a>
              </li>
              <li>
                <a href="/">Stuff</a>
              </li>
            </ul>
          </li>

          <li>
            <a href="/">Stuff</a>
            <ul>
              <li>
                <a href="/">Stuff</a>
              </li>
              <li>
                <a href="/">Stuff</a>
              </li>
              <li>
                <a href="/">Stuff</a>
              </li>
            </ul>
          </li>

          <li>
            <a href="/">Things</a>
            <ul>
              <li>
                <a href="/">Stuff</a>
              </li>
              <li>
                <a href="/">Stuff</a>
              </li>
              <li>
                <a href="/">Stuff</a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
