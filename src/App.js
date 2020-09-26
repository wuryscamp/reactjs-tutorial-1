import React, {Component} from 'react';
import Header from './component/Header';
import Login from './component/Login';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header title="Musobar Media" subTitle="Teman Belajar Coding"/>
        <Login/>
      </div>
    );
  }
}


export default App;
