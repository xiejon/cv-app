import React from 'react'

const School = ({update, isVisible}) => {
    const [name, setName] = React.useState('')
    const [degree, setDegree] = React.useState('')
    const [startDate, setStartDate] = React.useState('')
    const [endDate, setEndDate] = React.useState('')

    const styles = {
        display: isVisible ? "flex" : "none"
    }

    // function updateInfo() {
    //     update(prevInfo => {
    //         return {
    //             ...prevInfo, 
    //             education: {

    //                 // schools

    //                 name: name,
    //                 degree: degree,
    //                 startDate: startDate,
    //                 endDate: endDate
    //             }
    //         }
    //     })
    // }

    return( 
        <>
        <div className="form" style={styles}>
            <div className="name">
                <label htmlFor="name">School name</label>
                <input 
                    id="name" 
                    placeholder="Enter school/university name"
                    onChange={(e) => setName(prevName => prevName = e.target.value)}
                ></input>
            </div>
            <div className="degree">
                <label htmlFor="degree">Degree</label>
                <input 
                    id="degree" 
                    placeholder="Enter title of qualification"
                    onChange={(e) => setDegree(prevDegree => prevDegree = e.target.value)}
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
            <button onClick={console.log('hi')}>Enter</button>
        </div>
        </>
    )
}

export default School