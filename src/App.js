import { render } from "@testing-library/react";
import React, { Component } from "react";
import "./assets/css/style.css";

/*function App({title}) {
  return (
    <div>
      <div className="bg-gray-600 text-white p-5 border">{title}</div>
    </div>
  );
}*/
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { title: "Hello Mr", isShowing: false };
  }
  render() {
    return (
      <section className="flex justify-center">
        <div className="w-1/2">
          <div className="text-center">
            <div className="my-4">{this.state.title}</div>
            <button
              className="p-1 bg-blue-700 text-white my-2"
              onClick={() =>
                this.setState({ isShowing: !this.state.isShowing })
              }>
              Toggle Image
            </button>
          </div>
        {
            this.state.isShowing ? (
            <img 
            src="https://images.unsplash.com/photo-1610748604799-dbec8cc22cd5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" />
            ): null
        }
          
     
          
        </div>
      </section>
    );
  }
}

export default App;
