import React from 'react'
import uniqid from 'uniqid'
import ExperienceItem from './ExperienceItem'

const Experience = ({update}) => {
    const initialState = {
        title: '',
        company: '',
        startDate: '',
        endDate: '',
        desc: ''
    }
    const [currentInput, setCurrentInput] = React.useState(initialState)
    const [entries, setEntries] = React.useState([])
    const [isListVisible, setIsListVisible] = React.useState(false)
    const [isFormVisible, setIsFormVisible] = React.useState(false)

    React.useEffect(() => {
        update(prevInfo => {
            return {
                ...prevInfo, 
                experience: entries
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

    function toggleCategoryVisibility() {
        setIsListVisible(prevBool => !prevBool)
        setIsFormVisible(prevBool => prevBool = false)
    }

    function toggleFormVisibility() {
        setIsFormVisible(prevBool => !prevBool)
    }

    const listStyles = {
        display: isListVisible ? "flex" : "none"
    }

    const formStyles = {
        display: isFormVisible ? "flex" : "none"
    }

    const list = entries.map(entry => {
        return(
            <ExperienceItem 
                entry={entry} 
                setEntries={setEntries} 
                setCurrentInput={setCurrentInput} 
                key={uniqid()}
            />
        )
    })

    return(
        <>
        <div className="category" onClick={toggleCategoryVisibility}>Experience</div>
        <div className="list" style={listStyles}>
            {list}
            <button className="add-entry" onClick={toggleFormVisibility}>+ Add Experience</button>
        </div>
        <div className="form" style={formStyles}>
            <div className="title">
                <label htmlFor="title">Job title</label>
                <input 
                    id="title" 
                    placeholder="Enter job title"
                    value={currentInput.title}
                    onChange={(e) => setCurrentInput(prevInput => {
                        return {
                            ...prevInput,
                            title: e.target.value
                        }})}
                ></input>
            </div>
            <div className="company">
                <label htmlFor="company">Company</label>
                <input 
                    id="company" 
                    placeholder="Enter company name"
                    value={currentInput.company}
                    onChange={(e) => setCurrentInput(prevInput => {
                        return {
                            ...prevInput,
                            company: e.target.value
                        }})
                    }
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
                        }})
                    }
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
                        }})
                    }
                ></input>
            </div>
            <div className="job-desc">
                <label htmlFor="job-desc">Description</label>
                <input 
                    id="job-desc"
                    value={currentInput.desc}
                    onChange={(e) => setCurrentInput(prevInput => {
                        return {
                            ...prevInput,
                            desc: e.target.value
                        }})
                    }
                ></input>
            </div>
            <button className="enter-btn" onClick={handleSubmit}>Enter</button>
        </div>
        </>
    )
}

export default Experience