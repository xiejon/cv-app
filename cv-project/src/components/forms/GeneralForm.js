import React from 'react'

const GeneralForm = () => {
    const [isVisible, setIsVisible] = React.useState(false)

    const styles = {
        display: isVisible ? "flex" : "none"
    }

    function changeVisible() {
        setIsVisible(prevBool => !prevBool)
    }

    return(
        <>
        <div onClick={changeVisible}>Personal Details</div>
        <div className="form" style={styles}>
            <div className="name">
                <label htmlFor="name">Full name</label>
                <input id="name" placeholder="Enter your first and last name"></input>
            </div>
            <div className="email">
                <label htmlFor="email">Email</label>
                <input id="email" placeholder="Enter email"></input>
            </div>
            <div className="phone">
                <label htmlFor="phone">Phone</label>
                <input id="phone" placeholder="Enter phone number"></input>
            </div>
        </div>
        </>
    )
}

export default GeneralForm