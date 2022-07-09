import React from 'react'
import uniqid from 'uniqid'

const ExperienceItem = ({setEntries, entry}) => {
    const [isEditVisible, setIsEditVisible] = React.useState(false)
    const [editFormState, setEditFormState] = React.useState(entry)

    const editStyles = {
        display: isEditVisible ? "flex" : "none"
    }

    function handleEdit(e) {
        e.preventDefault()

        setEntries(prevEntries => prevEntries.map(prevEntry => {
            if (prevEntry === entry) {
                return prevEntry = editFormState
            } else {
                return prevEntry
            }
        }))
    }

    function handleDelete(e) {
        e.preventDefault() 

        setEntries(prevEntries => prevEntries.filter(prevEntry => prevEntry !== entry))
    }

    return(
        <>
        <div className="entry" key={uniqid()} onClick={() => setIsEditVisible(prevBool => !prevBool)}>
            <p>{entry.title}</p>
        </div>
        <form className="edit-form" style={editStyles}>
            <div className="title">
                <label htmlFor="title">Job title</label>
                <input 
                    id="title" 
                    placeholder="Enter school/university name"
                    value={editFormState.name}
                    onChange={(e) => setEditFormState(prevInput => {
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
                    value={editFormState.company}
                    onChange={(e) => setEditFormState(prevInput => {
                        return {
                            ...prevInput,
                            company: e.target.value
                        }})}
                ></input>
            </div>
            <div className="start-date">
                <label htmlFor="start-date">Start date</label>
                <input 
                    id="start-date" 
                    type="date"
                    value={editFormState.startDate}
                    onChange={(e) => setEditFormState(prevInput => {
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
                    value={editFormState.endDate}
                    onChange={(e) => setEditFormState(prevInput => {
                        return {
                            ...prevInput,
                            endDate: e.target.value
                        }})}
                ></input>
            </div>
            <div className="job-desc">
                <label htmlFor="job-desc">Description</label>
                <input 
                    id="job-desc"
                    value={editFormState.desc}
                    onChange={(e) => setEditFormState(prevInput => {
                        return {
                            ...prevInput,
                            desc: e.target.value
                        }})}
                ></input>
            </div>
            <button className="edit-btn" onClick={handleEdit}>Edit</button>
            <button className="delete-btn" onClick={handleDelete}>Delete</button>
        </form>
        </>
    )
}

export default ExperienceItem 