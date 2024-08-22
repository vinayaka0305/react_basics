import { Component } from "react";

class CounterWithClass extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    this.timerId = null;
    console.log("constructor");
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  componentDidMount(){
    console.log("componentDidMount")
    // this.timerId = setInterval(()=>{
    //     console.log('hi')
    // },1000)
  }

  componentDidUpdate(){
    console.log('componentDidUpdate')
  }

  componentWillUnmount(){
    console.log('componentWillUnmount')
    clearInterval(this.timerId)
  }
  render() {
    // console.log(this)
    const { count } = this.state;
    console.log("render");


    return (
      <div style={{ display: "flex" }}>
        <button
          onClick={function () {
            this.setState({ count: this.state.count - 1 });
          }.bind(this)}
        >
          -
        </button>
        <h2>Count:{count}</h2>
        <button
          //  onClick={() => this.setState({ count: this.state.count + 1 })}
          onClick={this.increment.bind(this)}
        >
          +
        </button>
      </div>
    );
  }
}
export default CounterWithClass;
