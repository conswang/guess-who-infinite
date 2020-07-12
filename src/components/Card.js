import React, { useState } from 'react';

export default (props) => {
    const [select, setSelect] = useState(false)

    const selected = () => {
        setSelect(!select)
        props.callback(props.idx);
    }

    return(
        <img className={ select ? 'card-img eliminate' : 'card-img' } src={props.img} onClick={ selected } idx={props.idx} ></img>
    )
}