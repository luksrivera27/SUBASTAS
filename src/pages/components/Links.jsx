import React from 'react'
import {Link} from 'react-router-dom';
export default function Links() {
    return (
        <React.Fragment>
            <ul>
                <li>
                    <Link to="/App"></Link>
                </li>
            </ul>
        </React.Fragment>
    )
}
