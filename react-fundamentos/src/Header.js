import React from "react";

import PropTypes from "prop-types";
import Button from "./Button";

import styles from './Header.scss'

import { useTheme } from './hooks/useTheme'
export default function Header(props) {
  const { handleToggleTheme } = useTheme();
  return (
    <div>
      <h1 className={styles.title}>{props.title}</h1>
      <Button onClick={handleToggleTheme}>Mudar Tema</Button>
      {props.children}
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

Header.defaultProps = {
  title: `JStack's Blog`
}