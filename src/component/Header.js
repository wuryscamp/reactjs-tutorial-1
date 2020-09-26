import React, {Component} from 'react';
import {Jumbotron, Container} from 'react-bootstrap';

class Header extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Jumbotron fluid>
                    <Container>
                        <h1>{this.props.title}</h1>
                        <span>{this.props.subTitle}</span>
                    </Container>
                </Jumbotron>
            </div>
        )
    }
}

export default Header;