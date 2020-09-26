import React, {Component} from 'react';
import Header from './component/Header';
import Container from './component/Container';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header title="Musobar Media" subTitle="Teman Belajar Coding"/>
        <Container/>
      </div>
    );
  }
}


export default App;
