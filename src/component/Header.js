import React, {Component} from 'react';
import styles from './mystyles.module.css';

class Header extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles.header}>
                <h1>{this.props.title}</h1>
                <span>{this.props.subTitle}</span>
            </div>
        )
    }
}

export default Header;