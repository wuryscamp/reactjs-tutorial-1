import React, {Component} from 'react';
import Header from './component/Header';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header title="Musobar Media" subTitle="Teman Belajar Coding"/>
      </div>
    );
  }
}


export default App;
