import React from 'react';

import './MyFooter.scss';

class MyFooter extends React.Component {
    render() {
        return(
            <div className="MyFooter d-flex flex-column">
                <footer className="footer">
                    <p className="text-center tlc-title">Team Learning Concepts | Copyright 2020</p>
                </footer>
            </div>
        )
    }
}

export default MyFooter;
