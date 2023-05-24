import iconthankyou from '../assets/images/icon-thank-you.svg'
import "../styles/thanks.css"
import React from 'react'

function Thanks() {
    return (
        <div className="thanks-container">
            <img src={iconthankyou} />
            <h3>Thank you!</h3>
            <p>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us @support@loremgaming.com</p>
        </div>
    )
}

export default Thanks