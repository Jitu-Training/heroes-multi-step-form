import '../styles/info.css'
import { Link } from "react-router-dom"

function Info() {
    return (
        <div className="info-container">
            <form action="" className="info-form">
                <h2 className='profile'>Personal info</h2>
                <p>Please provide your name, email address, and phone number</p>
                <label >Name</label>
                <input type="text" placeholder="Name" required />
                <label >Email</label>
                <input type="email" placeholder="Email" required />
                <label >Phone Number</label>
                <input type="Number" placeholder="Phone Number" required />
                <Link to={'/plan'}><button>Next Step</button></Link>
            </form>

        </div>
    )
}

export default Info