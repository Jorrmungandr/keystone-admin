import React, { Component } from 'react';
import axios from 'axios';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: [],
    };
  }

  componentDidMount() {
    (async () => {
      const res = await axios.get('/api/recipes/');
      console.log(res.data.recipe);
      this.setState({
        content: res.data.recipe,
      })
    })();
  }

  render() {
    return (
      <section className="app">
        <div>
          {this.state.content.map((recipe) => (
            <>
              <p>{recipe._id}</p>
              <p>{recipe.name}</p>
              <p dangerouslySetInnerHTML={{ __html: recipe.cookingInstructions }}></p>
              <img src={`/uploads/files/${recipe.image.filename}`} alt="" />
            </>
          ))}
        </div>
        <h2>Hello React!!</h2>
      </section>
    );
  }
};