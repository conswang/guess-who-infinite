import React from 'react';

export default (props) => {
    return(
            <img className="card-img" src={props.img} onClick={ props.test }></img>
    )
}