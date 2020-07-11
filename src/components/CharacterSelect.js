import React, { useState } from 'react';
import AwesomeSlider from 'react-awesome-slider';

export default () => {
    const startupScreen = (
        <div>
          <img src="https://picsum.photos/300/300" alt="default pic" />
        </div>
      );

    const slider = (
        <AwesomeSlider>
          <div data-src="https://picsum.photos/300/300" />
          <div data-src="https://picsum.photos/300/300" />
          <div data-src="https://picsum.photos/300/300" />
        </AwesomeSlider>
      );

    return (
        <div className ="character-container">
            <h1>Choose a Character</h1>
            <div className="pic-carousel">
            <AwesomeSlider
                startupScreen={startupScreen}
            >
            </AwesomeSlider>
            </div>
        </div>
        
    )
}