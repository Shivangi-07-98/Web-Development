import React from 'react'
import './Theme.css';
import {useContext} from "react";
import { ThemeContext } from './ThemeChanger';

function NavBar() {
  return (
    <div>
        <div>NavBar</div>
        <div>⬇️</div>
      <Options></Options>
      <Options></Options>
      <Options></Options>
    </div>
  )
}

function Options() {
    let CTheme = useContext(ThemeContext);
    return (
      <div className={CTheme=="light"?"light":"dark"}>
        Options
      </div>
    )
  }

export default NavBar