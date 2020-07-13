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

    const chosenCard = () => {
        if(select && props.inFinalSelectMode) {
            return '.card-img select-answer'
        } else if(props.isSelect) {
            return 'card-img eliminate'
        } else {
            return 'card-img'
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
// .select-answer

// props.isSelect ? 'card-img eliminate' : 'card-img'