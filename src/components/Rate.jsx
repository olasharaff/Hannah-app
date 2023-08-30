import React from 'react';
import './RateStyle.css';
import './root.css'

export default function Rate() {
    return (
        <>
            <div id='rate-section'>
                <div id="second-section">
                    <div className="rate-container">
                        <h2 className='text-700'>Our Rate</h2>
                        <a className='text-200' href="ii">
                            <i className="fa-solid fa-circle-dot fa-xs"></i> 
                             Gift card</a>
                        <a className='text-200' href="ii">
                            <i className="fa-solid fa-circle-dot fa-xs"></i>
                            Crypto </a>
                    </div>
                    <div className="select-container">
                        <div className="select-option">
                            <label className='text-200' htmlFor="my_select">Gift card Category</label>
                            <select id="my_select" name="my_select" autoFocus='false'>
                                <option className='text-200' value="1">select option</option>
                                <option value="1">Option 1</option>
                                <option value="2">Option 2</option>
                                <option value="3">Option 3</option>
                            </select>
                        </div>
                        <div className="select-option">
                            <label className='text-200' htmlFor="my_select">Gift card Sub-Category</label>
                            <select id="my_select" name="my_select">
                                <option className='text-200' value="1">select option</option>
                                <option value="1">Option 1</option>
                                <option value="2">Option 2</option>
                                <option value="3">Option 3</option>
                            </select>
                        </div>
                    </div>
                    <div className='card-amount'>
                        <h1 className='text-200'>Card amount</h1>
                    <p><span className='text-700 clr-dark'>0.00</span></p>
                    <input type="range" />
                    </div>
                    <div className='rate-box'>
                        <div className='rate-boxs'>
                            <h1 className='text-200 clr-white'>Rate</h1>
                            <p><span className='text-700 clr-light-white'>0.00</span></p>
                        </div>
                        <div className='rate-boxs'>
                            <h1 className='text-200  clr-white'>How much you would get</h1>
                            <p className='text-600 clr-light-white'><span className='text-700 clr-light-white'>0.00</span> NGN</p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}