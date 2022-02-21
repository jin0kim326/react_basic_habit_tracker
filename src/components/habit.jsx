import React, { PureComponent } from "react";

class Habit extends PureComponent {
  componentDidMount() {
    // 마운드 될때
  }

  componentWillUnmount() {
    //지우기 직전에 (UI상에서 사라질때)
  }

  handleIncreament = (event) => {
    this.props.onIncrement(this.props.habit);
  };

  handleDecreament = (event) => {
    this.props.onDecrement(this.props.habit);
  };

  handleDelete = (event) => {
    this.props.onDelete(this.props.habit);
  };

  render() {
    const { name, count } = this.props.habit;
    return (
      <li className="habit">
        <span className="habit-name">{name}</span>
        <span className="habit-count">{count}</span>
        <button
          className="habit-button habit-increase"
          onClick={this.handleIncreament}
        >
          <i className="fa-solid fa-square-plus"></i>
        </button>
        <button
          className="habit-button habit-decrease"
          onClick={this.handleDecreament}
        >
          <i className="fa-solid fa-square-minus"></i>
        </button>
        <button
          className="habit-button habit-delete"
          onClick={this.handleDelete}
        >
          <i className="fa-solid fa-trash"></i>
        </button>
      </li>
    );
  }
}

export default Habit;