import React from 'react'
import uniqid from 'uniqid';

const ComponentToPrint = React.forwardRef((props, ref) => {

    const {general, experience, education, skills} = props.info
    const styles = {
        aspectRatio: `1/${Math.sqrt(2)}`,
        margin: "0", 
        padding: "0"
    }

    const ed = education.map(prevEducation => {
        if (!prevEducation.name) return

        const startDate = prevEducation.startDate
        const degree = prevEducation.degree
        const name = prevEducation.name

        return (
        <p key={uniqid()}>
            {startDate && startDate.substring(5, 7) + '/' + startDate.substring(0, 4)}
            <i>{degree}</i>
            {degree && name && ', '}
            <b>{name}</b>
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
                
                {ed}

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