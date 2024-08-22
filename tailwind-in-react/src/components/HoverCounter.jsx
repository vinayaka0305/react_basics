import { Component } from "react";
import withCounter from "./withCounter";

class HoverCounter extends Component {

  render() {
    const { name } = this.props;

    return (
      <>
        <h1 id="c-title">{name}</h1>
        <div>
          <h2 className="text-2xl bg-green-200 p-4 text-center cursor-pointer" onMouseEnter={this.props.incrememet}>{this.props.count}</h2>
        </div>
      </>
    );
  }
}

export default withCounter(HoverCounter);
