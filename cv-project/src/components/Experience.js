import React from 'react'

const Experience = ({update}) => {
    const [isVisible, setIsVisible] = React.useState(false)

    const [currentInput, setCurrentInput] = React.useState({
        title: '',
        company: '',
        startDate: '',
        endDate: '',
        desc: ''
    })
    
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
                experience: {
  
                }
            }
        })
    }

    return(
        <>
        <div className="category" onClick={changeVisible}>Experience</div>
        <div className="form" style={styles}>
            <div className="title">
                <label htmlFor="title">Job title</label>
                <input 
                    id="title" 
                    placeholder="Enter job title"
                    onChange={(e) => setCurrentInput(prevInput => prevInput.title = e.target.value)}
                ></input>
            </div>
            <div className="company">
                <label htmlFor="company">Company</label>
                <input 
                    id="company" 
                    placeholder="Enter company name"
                    onChange={(e) => setCurrentInput(prevInput => prevInput.company = e.target.value)}
                ></input>
            </div>
            <div className="start-date">
                <label htmlFor="start-date">Start date</label>
                <input 
                    id="start-date" 
                    type="date"
                    onChange={(e) => setCurrentInput(prevInput => prevInput.startDate = e.target.value)}
                ></input>
            </div>
            <div className="end-date">
                <label htmlFor="end-date">End date</label>
                <input 
                    id="end-date" 
                    type="date"
                    onChange={(e) => setCurrentInput(prevInput => prevInput.endDate = e.target.value)}
                ></input>
            </div>
            <div className="job-desc">
                <label htmlFor="job-desc">Description</label>
                <input 
                    id="job-desc" 
                    onChange={(e) => setCurrentInput(prevInput => prevInput.desc = e.target.value)}
                ></input>
            </div>
            <button onClick={updateInfo}>Enter</button>
        </div>
        </>
    )
}

export default Experience