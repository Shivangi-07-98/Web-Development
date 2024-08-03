import React from 'react'
import './Theme.css';
import {useContext} from "react";
import { ThemeContext } from './ThemeChanger';
 
function Footer() {
    return (
      <div>
        <div>Footer</div>
        <div>⬇️</div>
        <FooterText></FooterText>
      </div>
    )
  }

  function FooterText() {
    let CTheme = useContext(ThemeContext);
    return (
      <div className={CTheme=="light"?"light":"dark"}>
        FooterText
      </div>
    )
  }


export default Footer
