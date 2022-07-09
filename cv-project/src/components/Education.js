import React, { useEffect } from 'react'

const Education = ({update}) => {

    const [currentInput, setCurrentInput] = React.useState({
        name: '',
        degree: '',
        startDate: '',
        endDate: '',
    })
    const [entries, setEntries] = React.useState([])
    const [isVisible, setIsVisible] = React.useState(false)

    React.useEffect(() => {
        update(prevInfo => {
            return {
                ...prevInfo, 
                education: entries
            }
        })
    }, [entries])

    function updateInfo() {
        setEntries(prevEntries => {
            return [
                ...prevEntries, 
                currentInput
            ]
        })
    }

    function changeVisible() {
        setIsVisible(prevBool => !prevBool)
    }

    const styles = {
        display: isVisible ? "flex" : "none"
    }

    return(
        <>
        <div className="category" onClick={changeVisible}>Education</div>
        <div className="form" style={styles}>
            <div className="name">
                <label htmlFor="name">School name</label>
                <input 
                    id="name" 
                    placeholder="Enter school/university name"
                    onChange={(e) => setCurrentInput(prevInput => {
                        return {
                            ...prevInput,
                            name: e.target.value
                        }})}
                ></input>
            </div>
            <div className="degree">
                <label htmlFor="degree">Degree</label>
                <input 
                    id="degree" 
                    placeholder="Enter title of qualification"
                    onChange={(e) => setCurrentInput(prevInput => {
                        return {
                            ...prevInput,
                            degree: e.target.value
                        }})}
                ></input>
            </div>
            <div className="start-date">
                <label htmlFor="start-date">Start date</label>
                <input 
                    id="start-date" 
                    type="date"
                    onChange={(e) => setCurrentInput(prevInput => {
                        return {
                            ...prevInput,
                            startDate: e.target.value
                        }})}
                ></input>
            </div>
            <div className="end-date">
                <label htmlFor="end-date">End date</label>
                <input 
                    id="end-date" 
                    type="date"
                    onChange={(e) => setCurrentInput(prevInput => {
                        return {
                            ...prevInput,
                            endDate: e.target.value
                        }})}
                ></input>
            </div>
            <button onClick={updateInfo}>Enter</button>
        </div>
        </>
    )
}

export default Education