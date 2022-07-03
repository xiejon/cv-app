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
        <div 
            className="form"
            style={styles}
            >
                <input placeholder="Name"></input>
        </div>
        </>
    )
}

export default GeneralForm