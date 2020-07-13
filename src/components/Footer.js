import React from 'react'

export default () => {
    return(
        <div className="footer-container">
            <ul>
                <li className="fa fa-linkedin"></li>
                <li><a href="https://www.linkedin.com/in/tzamarron/"> Ted </a></li>
                <li><a href="https://www.linkedin.com/in/kah-m-yap/"> Kah </a></li>
                <li><a href="https://www.linkedin.com/in/conswang/"> Constance </a></li>
            </ul>

            <ul className="footer-links">
                <li className="fa fa-github"></li>
                <li><a href="https://github.com/conswang/guess-who-infinite-client"> client </a></li>
                <li><a href="https://github.com/conswang/guess-who-infinite-server"> server </a></li>
                <li><a href="https://www.mintbean.io/"> mintbean </a></li>
            </ul>
        </div>
    )
}