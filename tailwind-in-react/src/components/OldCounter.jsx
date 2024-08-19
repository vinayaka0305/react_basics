import { Component } from "react";

class OldCounter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    this.timeId = null;
    console.log("constructor");
  }

  componentDidMount() {
    console.log("componentDidMount");
    document.querySelector("#c-title");
    // console.log(document.querySelector('#c-title'));
    // this.timeId = setInterval(()=>{
    //     console.log('hi')
    // },1000)
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
    clearInterval(this.timeId);
  }

 incrememet(){
    console.log(this);
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    console.log("render");
    const { name } = this.props;
    const { count } = this.state;
    return (
      <>
        <h1 id="c-title">{name}</h1>
        <div className="flex gap-4 mt-10 items-center">
          <button
            onClick={function () {
              this.setState({ count: this.state.count - 1 });
            }}
            className="bg-blue-400 rounded-sm px-4 py-1 cursor-pointer"
          >
            -
          </button>
          <h2>{count}</h2>
          <button
            onClick={this.incrememet.bind(this)}
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
