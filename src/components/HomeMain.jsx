import React from 'react'
import { HeroMain } from './HeroData';
import * as Ai from 'react-icons/ai';
import * as Fa from 'react-icons/fa';
import * as Tfi from 'react-icons/tfi';
import './HeroStyle.css'
import './root.css'




export default function HomeMain() {
  
  return (
      <div id='Home'>
    
          <main>
              {HeroMain.map((item, index) => {
                  return (

                      <div key={index} className="hero-container">
                          <div className="hero-left-box">
                              <h2 className='text-800 clr-white'>{item.heroheader}</h2>
                              <h1 className='text-ex-lg clr-main'>{item.herotitle}.</h1>
                              <h3 className='text-500'>{item.herocontent}</h3>
                              <ul className='hero-download'>
                                  <a className="app-download text-sm herobtn clr-bg-white" href="http://">
                                      Android <Ai.AiFillAndroid className="app-down" />{" "}
                                  </a>
                                  <a className="app-download text-sm clr-bg-white herobtn" href="http://">
                                      iOS <Fa.FaAppStoreIos className="app-down" />
                                  </a>
                                  <a className="app-download text-sm  clr-bg-white herobtn" href="http://">
                                      Web <Tfi.TfiWorld className="app-down" />
                                  </a>
                              </ul>

                          </div>

                          <div className="hero-right-box">
                              <img src={item.heroImg} className={item.cNameImg} alt='iphone' />
                          </div>
                      </div>


                  )
              })}

          </main>
    </div>
  )
}
