import React, {useState} from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import Logo from './assets/pictures/trashHaulLogo.png'

const Header = () => {
  const location = useLocation();

  //importing state for navbar toggle
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <header>
      <nav className='flex justify-between  items-center h-24 max-w-[1240px] mx-auto'>
        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
        <h1 className='text-3xl font-bold text-green-700 m-4'> 
        <img className="h-40 inline-block" src={Logo} alt="Our Logo" ></img>Nashville Trash Haul Co.</h1>
            </Link>

          <div>
            <p className='text-lg pr-8 pt-4'>615-476-9950</p>
            <p className='text-lg pr-8'>GavinOneil@email.com</p>

            </div>    
      </nav>
    </header>
  );
};

export default Header;
