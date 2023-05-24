import { Link } from "react-router-dom"
import "../styles/summary.css"

function Summary() {
    return (
        <div className="summary-container">
            <h3 className="finishing">Finishing Up</h3>
            <p>Double check everything looks Ok before confirming</p>
            <div className="main-Summary">
                <div className="summary-content">
                    <div className="summary-description">
                        <p>Arcade(Monthly)</p>
                        <Link to={'/plan'}>change</Link>
                    </div>
                    <span className="span">$9/mo</span>
                </div>
                <div className="summary-content">
                    <p className="summary-content-p">Online service</p>
                    <span className="span">+$1/mo</span>
                </div>
                <div className="summary-content">
                    <p className="summary-content-p">Larger storage</p>
                    <span className="span">+$2/mo</span>
                </div>
            </div>
            <div className="main-summary-content">
                <p >Total(per month)</p>
                <span>$12/yr</span>
            </div>
            <Link to={'/add-ons'}><button className="back">Go back</button></Link>
            <Link to={'/thanks'}><button className="next">Confirm</button></Link>
        </div>
    )
}

export default Summary