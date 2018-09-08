import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";


//Temp Dummy Component created as a stateless functional Component - returning some very basic JSX within the div.
const NewRoute = () => {
  return (
  <div>
    <p>New Route</p>
  </div>
  );

}

class App extends Component {
  render() {
    return (
      <BrowserRouter>

        <Route path="/new" component={NewRoute} />

      </BrowserRouter>

    );
  }
}

export default App;
