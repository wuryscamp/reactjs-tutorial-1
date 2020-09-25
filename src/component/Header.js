import React, {Component} from 'react';

class Header extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <span>{this.props.subTitle}</span>
            </div>
        )
    }
}

export default Header;