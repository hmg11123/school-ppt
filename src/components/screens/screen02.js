import React from "react";
import { Link } from "react-router-dom"

class screen02 extends React.Component {
    render() {
        return (
            <div>
                <div className="subHeader">
                    <ul>
                        <li >
                            <Link to="/screen02/subScreen01">1</Link>
                        </li>
                        <li >
                            <Link to="/screen02/subScreen02">2</Link>
                        </li>
                        <li>
                            <Link to="/screen02/subScreen03">3</Link>
                        </li>
                    </ul>
                </div>
                <div></div>
            </div>
        )
    }
}

export default screen02;