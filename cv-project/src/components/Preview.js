import React from 'react'

const Preview = (props) => {
    console.log(props)
    const {name} = props.info.general
    return(
        <div>
            <h1>{name}</h1>
        </div>
    )
}

export default Preview