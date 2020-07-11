import React, { useState } from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import { Card } from 'react-bootstrap';

export default () => {

    return (
        <div className="caro">
            <AwesomeSlider className="aws-btn">
                <div data-src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Icecat1-300x300.svg/300px-Icecat1-300x300.svg.png" />
                <div data-src="https://dummyimage.com/300.png/09f/fff" />
                <div data-src="https://www.thatericalper.com/wp-content/uploads/2014/10/dark-side-of-the-moon-300-x-300.jpg" />
            </AwesomeSlider>
        </div>
    )
}