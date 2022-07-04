import React from 'react'

const General = ({update}) => {
    const [isVisible, setIsVisible] = React.useState(false)
    const [name, setName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [phone, setPhone] = React.useState('')
    
    const styles = {
        display: isVisible ? "flex" : "none"
    }

    function changeVisible() {
        setIsVisible(prevBool => !prevBool)
    }

    function updateInfo() {
        update(prevInfo => {
            return {
                ...prevInfo, 
                general: {
                    name: name,
                    email: email,
                    phone: phone
                }
            }
        })
    }

    return(
        <>
        <div className="category" onClick={changeVisible}>Personal Details</div>
        <div className="form" style={styles}>
            <div className="name">
                <label htmlFor="name">Full name</label>
                <input 
                    id="name" 
                    placeholder="Enter your first and last name"
                    onChange={(e) => setName(prevName => prevName = e.target.value)}
                ></input>
            </div>
            <div className="email">
                <label htmlFor="email">Email</label>
                <input 
                    id="email" 
                    placeholder="Enter email"
                    onChange={(e) => setEmail(prevEmail => prevEmail = e.target.value)}
                ></input>
            </div>
            <div className="phone">
                <label htmlFor="phone">Phone</label>
                <input 
                    id="phone" 
                    placeholder="Enter phone number"
                    onChange={(e) => setPhone(prevPhone => prevPhone = e.target.value)}
                ></input>
            </div>
            <button onClick={updateInfo}>Enter</button>
        </div>
        </>
    )
}

export default General