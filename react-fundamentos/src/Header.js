import React from "react";

import PropTypes from "prop-types";
import Button from "./Button";
import { useTheme } from './hooks/useTheme'
export default function Header(props) {
  const { handleToggleTheme } = useTheme();
  return (
    <>
      <h1>{props.title}</h1>
      <Button onClick={handleToggleTheme}>Mudar Tema</Button>
      {props.children}
    </>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

Header.defaultProps = {
  title: `JStack's Blog`
}