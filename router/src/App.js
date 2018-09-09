import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";


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
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route component={Error} />
        </Switch>
      </BrowserRouter>

    );
  }
}

export default App;
