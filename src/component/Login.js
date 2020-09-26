import React, {Component} from 'react';

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
                <form onSubmit={this._handleSubmit}>
                    <input type="text" name="username" value={this.state.username} onChange={this._handleChange}/><br/>
                    <input type="password" name="password" value={this.state.password} onChange={this._handleChange}/><br/>
                    <input type="submit" value="Login"/>
                </form>

                <h3>{this.state.message}</h3>
            </div>
        );
    }
}

export default Login;