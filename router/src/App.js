import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
//Temp Dummy Component created as a stateless functional Component - returning some very basic JSX within the div.
// const NewRoute = () => {
//   return (
//   <div>
//     <p>New Route</p>
//   </div>
//   );

// }

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
