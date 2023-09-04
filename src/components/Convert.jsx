import { ConvertDataHeader, ConvertDataMain } from "./HeroData";
import { BsArrowRightShort } from 'react-icons/bs'
import './ConvertStyle.css'
// import './root.css'



export default function Convert() {

    return (
        <>
            <div id="convert-section" className="convert-section">
                {ConvertDataHeader.map((item, index) => {
                    return (

                        <div key={index} className="convert-header">
                            <h1 className='text-800'>{item.texttitle}</h1>
                            <h2 className='text-200'>{item.textcontent}</h2>
                        </div>

                    )

                })}

                <div>
                    {ConvertDataMain.map((item, index) => {
                        return (
                            <div key={index} className="convert-main">
                                <div className="convert-box1 clr-3-bg3E4">
                                    <div className="box-header">
                                        <img src={item.box1img1} alt={item.cName1} className={item.cName1} />
                                        <img src={item.box1img3} alt={item.cName3} className={item.cName3} />
                                        <img src={item.box1img2} alt={item.cName2} className={item.cName2} />
                                        <img src={item.box1img4} alt={item.cName4} className={item.cName4} />
                                    </div>

                                    <div className="s-inner-TxtContent">
                                        <h1 className='text-800'>{item.box1title}</h1>
                                        <h2 className='text-sm1'>{item.box1content}</h2>
                                        <div className="btn-arrow">
                                        <button type="submit" className={`${item.cNameBtn} clr-1-C4`}>{item.buttonjjj} <BsArrowRightShort className="arrow-left" /></button>
                                        </div>
                                    </div>

                                </div>




                                <div className="convert-box2 clr-4-bg0FE">
                                    <div className="box-header">
                                        <img src={item.box2img1} alt={item.alt} className={item.cNameHand} />
                                        <div className="box-header box-header2">
                                            <img src={item.box1img1} alt={item.cName1} className={item.cName1} />
                                            <img src={item.box1img3} alt={item.cName3} className={item.cName3} />
                                            <img src={item.box1img2} alt={item.cName2} className={`${item.cName2} naira-leftt`} />
                                            <img src={item.box1img4} alt={item.cName4} className={`${item.cName4} naira-rightt`} />
                                        </div>
                                      
                                    </div>
                                    <div className="s-inner-TxtContent s-inner-TxtContent-pd">
                                        <h1 className='text-800'>{item.box2title}</h1>
                                        <h2 className='text-sm1'>{item.box2content}</h2>
                                        <div className="btn-arrow">
                                            <button type="submit" className={`${item.cNameBtn} clr-bg-white`}>{item.buttonjjj} <BsArrowRightShort className="arrow-left" /></button>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>




        </>
    )
}