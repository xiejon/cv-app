import React from 'react'
import uniqid from 'uniqid'
import SkillItem from './SkillItem.js'

const Skills = ({update}) => {
    const initialState = {
        name: '',
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
                skills: entries
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
            <SkillItem 
                entry={entry} 
                setEntries={setEntries} 
                setCurrentInput={setCurrentInput} 
                key={uniqid()}
            />
        )
    })

    return(
        <>
        <div className="category" onClick={toggleCategoryVisibility}>Skills</div>
        <div className="list" style={listStyles}>
            {list}
            <button className="add-entry" onClick={toggleFormVisibility}>+ Add Skill</button>
        </div>
        <div className="form" style={formStyles}>
            <div className="name">
                <label htmlFor="name">Skill name</label>
                <input 
                    id="name" 
                    placeholder="Enter skill name"
                    value={currentInput.name}
                    onChange={(e) => setCurrentInput(prevInput => {
                        return {...prevInput, name: e.target.value}})
                    }
                ></input>
            </div>
            <div className="skill-desc">
                <label htmlFor="skill-desc">Description</label>
                <textarea 
                    id="skill-desc"
                    rows="2"
                    placeholder="Enter description of skill"
                    value={currentInput.desc}
                    onChange={(e) => setCurrentInput(prevInput => {
                        return {...prevInput, desc: e.target.value}})
                    }
                ></textarea>
            </div>
            <button className="enter-btn" onClick={handleSubmit}>Enter</button>
        </div>
        </>
    )
}

export default Skills