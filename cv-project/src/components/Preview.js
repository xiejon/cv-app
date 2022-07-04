import React from 'react'

const Preview = (props) => {
    const {general, education, experience} = props.info
    
    return(
        <div>
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
        </div>
    )
}

export default Preview