import React from 'react'

const Experience = ({update}) => {
    const [isVisible, setIsVisible] = React.useState(false)
    const [title, setTitle] = React.useState('')
    const [company, setCompany] = React.useState('')
    const [startDate, setStartDate] = React.useState('')
    const [endDate, setEndDate] = React.useState('')
    const [desc, setDesc] = React.useState('')
    
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
                    title: title,
                    company: company,
                    startDate: startDate,
                    endDate: endDate,
                    description: desc
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
                    onChange={(e) => setTitle(prevTitle => prevTitle = e.target.value)}
                ></input>
            </div>
            <div className="company">
                <label htmlFor="company">Company</label>
                <input 
                    id="company" 
                    placeholder="Enter title of qualification"
                    onChange={(e) => setCompany(prevCompany => prevCompany = e.target.value)}
                ></input>
            </div>
            <div className="start-date">
                <label htmlFor="start-date">Start date</label>
                <input 
                    id="start-date" 
                    type="date"
                    onChange={(e) => setStartDate(prevStartDate => prevStartDate = e.target.value)}
                ></input>
            </div>
            <div className="end-date">
                <label htmlFor="end-date">End date</label>
                <input 
                    id="end-date" 
                    type="date"
                    onChange={(e) => setEndDate(prevEndDate => prevEndDate = e.target.value)}
                ></input>
            </div>
            <div className="job-desc">
                <label htmlFor="job-desc">Description</label>
                <input 
                    id="job-desc" 
                    onChange={(e) => setDesc(prevDesc => prevDesc = e.target.value)}
                ></input>
            </div>
            <button onClick={updateInfo}>Enter</button>
        </div>
        </>
    )
}

export default Experience