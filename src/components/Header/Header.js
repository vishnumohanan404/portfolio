import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { FaHackerrank } from 'react-icons/fa';
import {RiAliensFill} from 'react-icons/ri' 

import { Container, Div1, Div2, Div3, NavLink, SocialIcons,Span } from './HeaderStyles';

const Header = () =>  (
<Container>
  <Div1>
    <Link href="/">
      <a style={{display:"flex",alignItems:"center",color:"#a6a6a6", marginBottom:"20px"}}>
        <RiAliensFill size="3rem"/> 
      </a>
    </Link>
  </Div1>
  <Div3>
    <li>
      <Link href="#project">
        <NavLink>
          Project
        </NavLink>
      </Link>
    </li>
    <li>
      <Link href="#tech">
        <NavLink>
          Technologies
        </NavLink>
      </Link>
    </li>
    <li>
      <Link href="#about">
        <NavLink>
          About
        </NavLink>
      </Link>
    </li>
  </Div3>
  {/* <Div3>
    <SocialIcons href="https://gist.github.com/KingKong26">
      <AiFillGithub size="3rem"/>
    </SocialIcons>
    <SocialIcons href="https://www.linkedin.com/in/vishnu-mohan-470971179">
      <AiFillLinkedin size="3rem"/>
    </SocialIcons>
    <SocialIcons href="https://www.hackerrank.com/vishnumohan19961">
      <FaHackerrank size="3rem"/>
    </SocialIcons>
  </Div3> */}
</Container>
);

export default Header;
