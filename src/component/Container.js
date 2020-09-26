import React, {Component} from 'react';

class Container extends Component {

    constructor(props) {
        super(props);
        this.state = {
            now: new Date()
        }
    }

    componentDidMount() {
        this.timerId = setInterval(() => {
            this.setState({now: new Date()});
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    render() {
        return (
            <div>
                <h2>{this.state.now.toTimeString()}</h2>
            </div>
        );
    }
}

export default Container;