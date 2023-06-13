import React from 'react'
import {AiOutlineStock} from 'react-icons/ai'
import { IconContext } from "react-icons";
import '../styles/sidebar.css'

export default function SideBar(temp){
    // console.log(temp)
    const tickersObject = Object.values(temp || {});
    const tickers = tickersObject[0]

    // function setClicked = temp.setClicked

    console.log(tickers)

    function renderTickers(){
        if(tickers){
            const output = tickers.map(function(ticker){
                return (
                <span key={ticker} className='ticker'>
                    <div 
                        
                        key={ticker}
                        tabIndex={ticker}
                        onClick={() => temp.setClicked(ticker)}
                    >
                        {ticker}
                    </div>
                </span> 
                )
            })
            return output
        }
    }

    return ( 
        <div className="shell">
            <span className="watchlist">
                Watchlist
            </span>
            <IconContext.Provider value={{color: '#13a818', size: 72}}>
                 <AiOutlineStock />
            </IconContext.Provider>
            <hr class="line" size="100" width="90%"/>

            {renderTickers()}
        </div>
    );
}