import { useContext } from "react";
import { SidebarContext } from '../contexts/SidebarContext'
import { CartContext } from "../contexts/CartContext";
import Logo from "../img/logo.png"

import { BsBag } from 'react-icons/bs'
import { Link } from "react-router-dom";

const Header = () => {

  const { isOpen, setIsOpen } = useContext(SidebarContext)
  const { itemAmount } = useContext(CartContext)

  return (
    <header className="bg-custom_primary py-4 shadow-md' fixed w-full z-10">
      <div className="container mx-auto flex items-center justify-between">
        <Link to={'/'} className="flex items-center gap-4">
          <div>
            <img className="w-[40px]" src={Logo} alt="logo do site" />
          </div>
          <div className="font-semibold text-xl">Seasons Clothes</div>
        </Link>
       
        <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer flex relative">
          <BsBag className="text-2xl " />
          <div className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] text-white rounded-full flex justify-center items-center">{itemAmount}</div>
        </div>
      </div>
    </header>

  )
};

export default Header;
