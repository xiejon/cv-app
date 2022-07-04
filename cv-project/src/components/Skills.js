import React from 'react'

const Skills = ({update}) => {
    const [isVisible, setIsVisible] = React.useState(false)
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
                skills: {
                    description: desc
                }
            }
        })
    }

    return(
        <>
        <div className="category" onClick={changeVisible}>Skills</div>
        <div className="form" style={styles}>
            <div className="skills-desc">
                <label htmlFor="skills-desc">Description</label>
                <input 
                    id="skills-desc" 
                    placeholder="Enter description of skills"
                    onChange={(e) => setDesc(prevDesc => prevDesc = e.target.value)}
                ></input>
            </div>
            <button onClick={updateInfo}>Enter</button>
        </div>
        </>
    )
}

export default Skills