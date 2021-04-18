import  { FC} from 'react';


import  {Logo} from 'components/atoms/logo';
import  {HeaderLinks  } from 'components/blocks/HeaderLinks';

import useScreenResize from 'hooks/useScreenResize'
import { HamburgerMenuIcon } from 'components/icons';

export const Navbar:FC<{}> = () => {
    const [screenDimension] = useScreenResize()


    const handleSideBar = () => {}
    
    return (
        <nav className="bg-main-blue shadow-lg py-2 sticky top-0">
                <div className="main-container">
                    <div className="flex flex-row justify-between items-center">
                        <Logo />
                       {screenDimension.isMobile ? <Menu onClick={handleSideBar} /> :  <HeaderLinks />}
                    </div>
                </div>
        </nav>
    )
}


export interface MenuProps  {
    onClick: () => void
}

export const Menu:FC<MenuProps> = ({onClick}: MenuProps) =>   {
    return (
        <button  onClick={onClick} className="outline-none bg-none border-none">
                <HamburgerMenuIcon fill="white" />
        </button>
    )
}