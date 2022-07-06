import React from 'react'

const ComponentToPrint = React.forwardRef((props, ref) => {

    const {general, experience, skills} = props.info
    const styles = {
        aspectRatio: `1/${Math.sqrt(2)}`,
        margin: "0", 
        padding: "0"
    }

    const education = props.info.education.map(prevEducation => {
        if (!prevEducation.name) return
        return (
        <p>
            {prevEducation.startDate.substring(5, 7)}/{prevEducation.startDate.substring(0, 4)}
            <i>{prevEducation.degree}</i>
            {prevEducation.degree && prevEducation.name && ', '}
            <b>{prevEducation.name}</b>
        </p>
        )
    })

    return (
      <div className="print-container">
          <div className="cv-preview" ref={ref} style={styles}>
            <div className="cv-content" >
                <h1>{general.name}</h1>
                <p className="cv-email">{general.email}</p>
                <p className="cv-phone">{general.phone}</p>
                <h2>Education</h2>
                
                {education}

                <h2>Experience</h2>
                <p>{experience.title}</p>
                <p>{experience.company}</p>
                <p>{experience.startDate}</p>
                <p>{experience.endDate}</p>
                <p>{experience.description}</p>
                <h2>Skills</h2>
                <p>{skills.description}</p>
            </div>
        </div>
      </div>
    );
  });
  
export default ComponentToPrint