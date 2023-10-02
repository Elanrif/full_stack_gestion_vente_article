import React from 'react'
import { Link } from 'react-router-dom'
import Oppo from './Oppo';
import Watch from './Watch';
import Iphone from './Iphone';

function Header() {
  return (
    <>
     <Iphone/>
     <Oppo/>
     <Watch/>
    </>
  );
}

export default Header
