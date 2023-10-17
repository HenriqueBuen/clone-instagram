import { AiOutlineSearch, AiFillHome } from 'react-icons/ai'
import { RiMessengerLine } from 'react-icons/ri'
import { BsPlusSquare } from 'react-icons/bs'
import { MdOutlineExplore } from 'react-icons/md'
import { FiHeart } from 'react-icons/fi'

import{ IconContext } from 'react-icons'

import './style.css'

export function Header() {
    return (
        <header className="header">

            <div className="container">

                <img className='logo' src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" />

                <div className="input-fake">
                    <IconContext.Provider value={{  color: '#8e8e8e' }}> 
                        <AiOutlineSearch/>
                        <input placeholder='Pesquisar' />
                    </IconContext.Provider>
                </div>

                <div className='menu-icons'>
                    <IconContext.Provider value={{  size: '26px' }}>
                        <div>
                            <AiFillHome />
                        </div>

                        <div>
                            <RiMessengerLine/>
                        </div>

                        <div>
                            <BsPlusSquare/>
                        </div>

                        <div>
                            <MdOutlineExplore/>
                        </div>

                        <div>
                            <FiHeart/>
                        </div>
                        
                        
                    </IconContext.Provider>

                    <img className="img-user" src="https://scontent.fgru6-1.fna.fbcdn.net/v/t1.6435-9/78403283_1323062667899235_4445143602053513216_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=dd63ad&_nc_ohc=nPi8Gs6yZg4AX_XcbKo&_nc_ht=scontent.fgru6-1.fna&oh=00_AfC_BZXdcA1_CqgxbwJBSE3QYCVJ6TpC4oYxcHIgrsvwjg&oe=65512DF2https://scontent.fgru6-1.fna.fbcdn.net/v/t1.6435-9/78403283_1323062667899235_4445143602053513216_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=dd63ad&_nc_ohc=nPi8Gs6yZg4AX_XcbKo&_nc_ht=scontent.fgru6-1.fna&oh=00_AfC_BZXdcA1_CqgxbwJBSE3QYCVJ6TpC4oYxcHIgrsvwjg&oe=65512DF2" />
                </div>

            </div>

        </header>
    )
}