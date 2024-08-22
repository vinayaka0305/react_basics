import { Component } from "react";

const withCounter = (WrappedComponent) => {
  return class NewComponent extends Component {
    constructor() {
        super();
        this.state = {
          count: 0,
        };
      }
    
    
     incrememet(){
        // console.log(this);
        this.setState({ count: this.state.count + 1 });
      }
    //   incrememet=()=>{
    //     this.setState({ count: this.state.count + 1 });
    //   }
    render() {
        // console.log(this.props);
      return <WrappedComponent count={this.state.count} incrememet= {this.incrememet.bind(this)} {...this.props} />;
    }
  };
};

export default withCounter;
