import React from 'react'
import School from './School'

const Education = ({update}) => {

    const [isVisible, setIsVisible] = React.useState(false)
    const [name, setName] = React.useState('')
    const [degree, setDegree] = React.useState('')
    const [startDate, setStartDate] = React.useState('')
    const [endDate, setEndDate] = React.useState('')
    
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
                education: {

                    // schools

                    name: name,
                    degree: degree,
                    startDate: startDate,
                    endDate: endDate
                }
            }
        })
    }

    return(
        <>
        <div className="category" onClick={changeVisible}>Education</div>
        <School />
        </>
    )
}

export default Education