import React from 'react';

import './MyFooter.scss';

class MyFooter extends React.Component {
    render() {
        return(
            <div className="MyFooter d-flex flex-column">
                <p className="text-center tlc-title">Team Learning Concepts | Copyright 2020</p>
            </div>
        )
    }
}

export default MyFooter;
