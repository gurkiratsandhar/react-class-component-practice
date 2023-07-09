import react from "react";

class Counter extends react.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      seed: 0,
    };

    this.increment = () => this.setState({ counter: this.state.counter + 1 });
    this.decrement = () => this.setState({ counter: this.state.counter - 1 });
  }

  static getDerivedStateFromProps(props, state) {
    if (props.seed && state.seed !== props.seed) {
      return {
        seed: props.seed,
        counter: props.seed,
      };
    }
    return null;
  }

  componentDidMount() {
    console.log("Component Did Mount");
    console.log("-------------------");
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (
      nextProps.ignoreProp &&
      this.props.ignoreProp !== nextProps.ignoreProp
    ) {
      return false;
    }
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("Get SnapShot Before Update");
    return null;
  }

  render() {
    console.log("render");

    return (
      <div>
        <div className="counter">Counter:{this.state.counter}</div>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    );
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("Component Did Update");
    console.log("--------------------");
  }

  componentWillUnmount() {
    console.log("Component Will Unmount");
    console.log("----------------------");
  }

  componentDidCatch(error, info) {
    console.log("Component Did Catch");
  }
}

export default Counter;
