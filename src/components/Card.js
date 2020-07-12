import React, { useState } from 'react';

export default (props) => {
    return(
        <img className={ props.selected ? 'card-img eliminate' : 'card-img'} src={props.img} idx={props.idx} onClick={ () => props.selectCard(props.idx) } ></img>
    )
}
