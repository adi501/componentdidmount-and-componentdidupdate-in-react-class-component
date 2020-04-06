import React, { Component } from "react";

class ClassDidMountDidUpdateEXP1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      role: "React developer",

      name: "Adi"
    };
  }

  componentDidMount() {
    console.log(
      `didMount: Hello I'm ${this.state.name} and I'm a ${this.state.role}`
    );
  }

  componentDidUpdate() {
    console.log(
      `didUpdate: Hello I'm ${this.state.name} and I'm a ${this.state.role}`
    );
  }

  render() {
    return (
      <div>
        <center>
          <h4> componentDidMount & componentDidUpdate in Class Component</h4>
        </center>

        <p>{`Hello I'm ${this.state.name} and I'm a ${this.state.role}`}</p>

        <button
          onClick={() => this.setState({ name: "JC", role: ".net developer" })}
        >
          Change me
        </button>
      </div>
    );
  }
}

export default ClassDidMountDidUpdateEXP1;
