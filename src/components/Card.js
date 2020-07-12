import React, { useState } from 'react';

export default (props) => {
    const [select, setSelect] = useState(false)

    const selected = () => {
        props.selectCard(props.idx);
        if (props.inFinalSelectMode) {
            props.callback(props.idx);
        } else {
            setSelect(!select)
        }
    }

    return(
        <img
            className={ props.isSelect ? 'card-img eliminate' : 'card-img' }
            src={props.img}
            onClick={ selected }
            idx={props.idx} >
        </img>
    )
}
