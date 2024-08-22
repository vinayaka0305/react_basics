import { Component } from "react";
import withCounter from "./withCounter";

class ClickCounter extends Component {
  render() {
    // console.log(this.props);
    const { name } = this.props;
    return (
      <>
        <h1 id="c-title">{name}</h1>
        <div>
          <h2
            className="text-2xl bg-sky-400 p-4 text-center cursor-pointer"
            onClick={this.props.incrememet}
          >
            {this.props.count}
          </h2>
        </div>
      </>
    );
  }
}

export default withCounter(ClickCounter);
