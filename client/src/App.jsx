import React, { Component } from 'react';
// import axios from 'axios';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: [],
    };
  }

  // componentDidMount() {
  //   (async () => {
  //     const res = await axios.get('/api/recipe/');
  //     this.setState({
  //       content: res,
  //     })
  //   })();
  // }

  render() {
    return (
      <section className="app">
        {/* {this.state.content} */}
        <h1>Hello React!!</h1>
      </section>
    );
  }
};