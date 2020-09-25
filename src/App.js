import React from "react";
import { Content, Header } from "./components/layouts";
import { screen01, screen02, screen03 } from "./components/screens";
import { Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header>
          <Route path="/" component={Header} />
        </header>
        <main>
          <Route exact path="/" component={Content} />
          <Route exact path="/screen01" component={screen01} />
          <Route exact path="/screen02" component={screen02} />
          <Route exact path="/screen03" component={screen03} />
        </main>
      </div>
    );
  }
}

export default App;
