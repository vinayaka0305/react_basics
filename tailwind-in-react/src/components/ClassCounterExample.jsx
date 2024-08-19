import { Component } from "react";
// basically it is class
// we extend from the component to create a class component;

class OldCounter extends Component {
  // after creating a class we have to implement render method;
  constructor() {
    super();
    this.state = {
      count: 0,
      count2: 0,
    };
    console.log("constructor")
  }

  render() {
    // this method will return jsx
    //  console.log(this)
    const { name } = this.props;
    const {count,count2} = this.state;
    console.log("render")
    // we can destructure and use this one
    return (
      <>
        <h1>{name}</h1>
        <div className="flex gap-4 mt-10 items-center">
          <button
            onClick={() => this.setState({ count: count - 1 })}
            className="bg-blue-400 rounded-sm px-4 py-1 cursor-pointer"
          >
            -
          </button>
          <h2>{count}</h2>
          <button
            onClick={() => this.setState({ count: count+1 })}
            className="bg-blue-400 rounded-sm px-4 py-1 cursor-pointer"
          >
            +
          </button>
        </div>
        <div className="flex gap-4 mt-10 items-center">
          <button
            onClick={() => this.setState({ count2: this.state.count2 - 1 })}
            className="bg-blue-400 rounded-sm px-4 py-1 cursor-pointer"
          >
            -
          </button>
          <h2>{this.state.count2}</h2>
          <button
            onClick={() => this.setState({ count2: this.state.count2 + 1 })}
            className="bg-blue-400 rounded-sm px-4 py-1 cursor-pointer"
          >
            +
          </button>
        </div>
      </>
    );
  }
}

export default OldCounter;
// after exporting we can use this as react component

// to create a state in react class component
// we have to implement constructor method
// in this we must super and the we have use the
// property called this.state
// we asign an object to this.state = {}
// {}
