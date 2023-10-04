import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react'

export default function NavBar() {
    const [clicked, setClicked] = useState(false);
    const handleClicked = () => {
        setClicked(!clicked);
    };
    const navigate = useNavigate()


    return (
        <div id='Home'>
            <nav className="navigation-header">
                <img src='/assets/nav-logo.svg' alt='' href='wwww.google.com/' onClick={(() => navigate('/'))} />
                <div className="mobile-toggle" onClick={handleClicked}>
                    <i
                        className={clicked ? "fa-solid  fa-xmark" : "fa-solid fa-bars"}
                    ></i>
                </div>
                <ul
                    className={clicked ? "primary-navigation active" : "primary-navigation"}
                >
                    <li onClick={(() => navigate('/features'))} className='nav-link'>Features</li>
                    <li onClick={(()=> navigate('/about'))}  className='nav-link'>About</li>
                    <li onClick={(()=> navigate('/blog'))} className='nav-link faqs'>Blog</li>
                    <li onClick={(()=> navigate('/faqs'))} className='nav-link faqs'>FAQs</li>
                    <li onClick={(()=> navigate('/contacts'))} className='contact nav-link'>Contact</li>
                    <li onClick={(()=> navigate('/log-in'))} className='login nav-link'>Login</li>
                    <li onClick={(()=> navigate('/register'))} className='register nav-link'>Create an account</li>

                </ul>
            </nav>

        </div>
    )
}