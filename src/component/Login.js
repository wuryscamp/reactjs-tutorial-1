import React, {Component} from 'react';
import {Form, Button, Container, Alert} from 'react-bootstrap';

class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: "",
            message: ""
        }

        this._handleChange = this._handleChange.bind(this);
        this._handleSubmit = this._handleSubmit.bind(this);
    }

    _handleChange(e) {
        let target = e.target;
        let targetName = target.name;
        let targetValue = target.value;

        this.setState({[targetName]: targetValue});
    }

    _handleSubmit(e) {
        let {username, password, message} = this.state;

        // anggap saja ini adalah validasi dari webservice
        if (username === 'wuriyanto' && password === '12345') {
            message = 'login succes';
        } else {
            message = 'login fail';
        }

        this.setState({message: message});
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <Container>
                    <Form onSubmit={this._handleSubmit}>
                        <Form.Group>
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" name="username" value={this.state.username} onChange={this._handleChange}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password" value={this.state.password} onChange={this._handleChange}/>
                        </Form.Group>
                        <Button variant="primary" type="submit">Login</Button>
                    </Form>

                    <Alert variant="info">{this.state.message}</Alert>
                </Container>
            </div>
        );
    }
}

export default Login;