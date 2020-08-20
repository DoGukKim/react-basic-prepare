import React, { Fragment } from "react";
import PropsTypes from "prop-types";

class Screen extends React.Component {
  state = {
    counter: 0,
  };
  add = () => {
    this.setState(
      {
        counter: this.state.counter + 1,
      },
      // 추가적인 작업
      () => console.log("StateAddIt!")
    );
  };
  min = () => {
    this.setState(prev => ({
      counter: prev.counter - 1,
    }));
  };
  render() {
    const { counter } = this.state;
    return (
      <Fragment>
        <h3>The Num is {counter}</h3>
        <button onClick={this.add}>+1</button>
        <button
          onClick={() => {
            this.setState(prev => ({
              counter: prev.counter - 1,
            }));
          }}
        >
          -1
        </button>
      </Fragment>
    );
  }
}
Screen.PropsTypes = {
  count: PropsTypes.number.isRequired,
};

export default Screen;
