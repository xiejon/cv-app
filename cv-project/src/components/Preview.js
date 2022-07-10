import React from 'react'
import uniqid from 'uniqid';

const ComponentToPrint = React.forwardRef((props, ref) => {

    const {general, experience, education, skills} = props.info
    const styles = {
        aspectRatio: `1/${Math.sqrt(2)}`,
        margin: "0", 
        padding: "0"
    }

    const educationSection = education.map(prevEducation => {
        const {name, degree, startDate, endDate} = prevEducation

        if (!name) return

        return (
        <div className="education-item" key={uniqid()}>
            <p className="date">
                {startDate && startDate.substring(5, 7) + '/' + startDate.substring(0, 4)} 
                — 
                {endDate && endDate.substring(5, 7) + '/' + endDate.substring(0, 4)}
            </p>
            <span>
                <i>{degree}</i>
                {degree && name && ', '}
                <b>{name}</b>
            </span>
        </div>
        )
    })

    const experienceSection = experience.map(prevExperience => {
        const {title, company, startDate, endDate, desc} = prevExperience

        if (!title) return

        return (
        <div className="experience-item" key={uniqid()}>
            <p>
                {startDate && startDate.substring(5, 7) + '/' + startDate.substring(0, 4)}
                <i>{title}</i>
                {company && title && ', '}
                <b>{company}</b>
            </p>
        </div>
        )
    })

    const skillsSection = skills.map(prevSkill => {
        const {name, desc} = prevSkill

        if (!name) return

        return (
        <div className="skill" key={uniqid()}>
            <p><b>{name}</b></p>
            <p>{desc}</p>
        </div>
        )
    })

    return (
      <div className="print-container">
          <div className="cv-preview" ref={ref} style={styles}>
            <div className="cv-content" >
                <h1>{general.name}</h1>
                <p className="cv-email">{general.email}</p>
                <p className="cv-phone">{general.phone}</p>

                
                <div className="education">
                    <h2>Education</h2>
                    {educationSection}
                </div>

                <h2>Experience</h2>
                {experienceSection}
                
                <h2>Skills</h2>
                {skillsSection}

            </div>
        </div>
      </div>
    );
  });
  
export default ComponentToPrint