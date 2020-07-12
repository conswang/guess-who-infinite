import React, { useState } from 'react';

export default (props) => {
    const [select, setSelect] = useState(false)

    const selected = (event) => {
        props.cardIdx(props)
        if(props.guess) {
            alert(props.idx)
            return props.idx
        }
        setSelect(!select)
    }

    const test = () => {
        alert('right')
    }

    return(
        <img className={ select ? 'card-img eliminate' : 'card-img' } src={props.img} onClick={ selected } idx={props.idx} ></img>
    )
}