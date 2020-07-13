import React, { useEffect } from "react";
import { socket } from "../App";

export default (props) => {

  return (
    <div className="lobby-container">
      <p> Type join code: </p>
      <h1> {props.code} </h1>
      <div class="loader"></div>
      <div class="loading-container">
        <div class="loading__letter">W</div>
        <div class="loading__letter">a</div>
        <div class="loading__letter">i</div>
        <div class="loading__letter">t</div>
        <div class="loading__letter">i</div>
        <div class="loading__letter">n</div>
        <div class="loading__letter">g</div>
        <div class="loading__letter">&nbsp;</div>
        <div class="loading__letter">f</div>
        <div class="loading__letter">o</div>
        <div class="loading__letter">r</div>
        <div class="loading__letter">&nbsp;</div>
        <div class="loading__letter">p</div>
        <div class="loading__letter">l</div>
        <div class="loading__letter">a</div>
        <div class="loading__letter">y</div>
        <div class="loading__letter">e</div>
        <div class="loading__letter">r</div>
        <div class="loading__letter">&nbsp;</div>
        <div class="loading__letter">2</div>
        <div class="loading__letter">.</div>
        <div class="loading__letter">.</div>
        <div class="loading__letter">.</div>
      </div>
    </div>
  );
};
