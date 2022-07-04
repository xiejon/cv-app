import React from 'react'

const Preview = (props) => {
    const {general, education, experience, skills} = props.info
    const styles = {
        aspectRatio: `1/${Math.sqrt(2)}`
    }
    
    return(
        <div className="cv-preview" style={styles}>
            <h1>{general.name}</h1>
            <p>{general.email}</p>
            <p>{general.phone}</p>

            <h2>Education</h2>
            <p>{education.name}</p>
            <p>{education.degree}</p>
            <p>{education.startDate}</p>
            <p>{education.endDate}</p>

            <h2>Experience</h2>
            <p>{experience.title}</p>
            <p>{experience.company}</p>
            <p>{experience.startDate}</p>
            <p>{experience.endDate}</p>
            <p>{experience.description}</p>

            <h2>Skills</h2>
            <p>{skills.description}</p>
        </div>
    )
}

export default Preview