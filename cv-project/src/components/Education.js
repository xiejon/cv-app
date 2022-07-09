import React, { useEffect } from 'react'
import uniqid from 'uniqid';

const Education = ({update}) => {
    const initialState = {
        name: '',
        degree: '',
        startDate: '',
        endDate: '',
    }
    const [currentInput, setCurrentInput] = React.useState(initialState)
    const [entries, setEntries] = React.useState([])
    const [isListVisible, setIsListVisible] = React.useState(false)
    const [isFormVisible, setIsFormVisible] = React.useState(false)

    // Update parent state only after component's state has finished updating
    React.useEffect(() => {
        update(prevInfo => {
            return {
                ...prevInfo, 
                education: entries
            }
        })
    }, [entries])

    function handleSubmit(e) {
        e.preventDefault()
        // Update entries state
        setEntries(prevEntries => {
            return [
                ...prevEntries, 
                currentInput
            ]
        })
        // Clear form inputs 
        setCurrentInput(prevInput => prevInput = initialState)
        // Close form
        setIsFormVisible(prevBool => !prevBool)
    }

    const listStyles = {
        display: isListVisible ? "flex" : "none"
    }

    const formStyles = {
        display: isFormVisible ? "flex" : "none"
    }

    const list = entries.map(prevEntry => {
        return(
            <div className="entry" key={uniqid()}>
                <p>{prevEntry.name}</p>
            </div>
        )
    })

    return(
        <>
        <div 
            className="category" 
            onClick={() => setIsListVisible(prevBool => !prevBool)}
            >Education
        </div>
        <div className="list" style={listStyles}>

            {list}
    
            <button 
            className="add-entry" 
            onClick={() => setIsFormVisible(prevBool => !prevBool)}
            >+ Add Education
        </button>
        </div>
        <form className="form" style={formStyles}>
            <div className="name">
                <label htmlFor="name">School name</label>
                <input 
                    id="name" 
                    placeholder="Enter school/university name"
                    value={currentInput.name}
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
                    value={currentInput.degree}
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
                    value={currentInput.startDate}
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
                    value={currentInput.endDate}
                    onChange={(e) => setCurrentInput(prevInput => {
                        return {
                            ...prevInput,
                            endDate: e.target.value
                        }})}
                ></input>
            </div>
            <button onClick={handleSubmit}>Enter</button>
        </form>
        </>
    )
}

export default Education