import React, {useState, useEffect} from 'react';
import { solutionIcon, solutionContent, solutionNewsIcon } from './HeroData'
import './SolutionStyle.css'
import './root.css'


export default function Solution() {
    const [isAnimating, setIsAnimating] = useState(true)

    useEffect(() =>{
        const animationTimer = setTimeout (() =>{
            setIsAnimating(false)
        }, 10000);
        return () => clearTimeout(animationTimer);
    }, [])
    return (
        <div>
        <section id='solution-section'>
                <div  className='solution-container'>
               {solutionContent.map((item, index) => {
                return(
                    <div key={index}>
                    <h1 className='text-800'>{item.textheader}</h1>
                        <h2 className='text-200'>{item.textcontent}</h2>
                    </div>
                )
               })}
                </div>
        
                <div className={`${'movie-animation'} ${'solution-icon-container'} ${isAnimating ? 'animate' : ''}`}>
        {solutionIcon.map((item, index) => {
            return(
            <img src={item.cardIcon} alt={item.alt} className={item.cName} />
            )
        })}
                </div>
                <div className='solution-newsIcon-container'>
                {solutionNewsIcon.map((item, index) => {
                    return( 
                       
                        <img src={item.newsIcon} key={index} style={{ color: "red" }} alt={item.alt} className={`${item.cName} clr-5-8080`}/>
                      
                    )
                   
                })}
                </div>
       
      
        </section>
   
        </div>
    )
}