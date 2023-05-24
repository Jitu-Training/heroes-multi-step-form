import Addon from '../components/addon'
import { Link } from "react-router-dom"
import "../styles/addon.css"

function Add_ons() {
    return (
        <div className='add-container'>
            <h4 className='add-Ons'>Pick add-ons</h4>
            <p>
                Add-ons help enhance your gaming experience.
            </p>
            <Addon service="Online Service" storage="Access to multiplayer games" time="+$1/mo" />
            <Addon service="Larger storage" storage="Extra 1TB of cloud save" time="+$2/mo" />
            <Addon service="Customizable Profile" storage="Custom theme on your profile" time="+$2/mo" />
            <div className='buttons_1'>
                <Link to={'/plan'}><button className='back_1'>Go back</button></Link>
                <Link to={'/summary'}><button className='next_1'>Next Step</button></Link>
            </div>
        </div>
    )
}

export default Add_ons