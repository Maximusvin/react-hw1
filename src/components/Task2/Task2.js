import React, { Component } from 'react';
import A from './A';
import s from './Task2.module.css';

class Task2 extends Component {
  state = {
    randomCount: null,
  };

  getFactorCount = num => {
    const factor = 1000;
    this.setRandomCount(num * factor);
  };

  setRandomCount = num => {
    this.setState({ randomCount: num });
  };

  render() {
    const { randomCount } = this.state;

    return (
      <div className={s.task}>
        <h1 className={s.title}>Task-2</h1>
        <p className={s.subtitle}>
          {randomCount
            ? `Отримане число: ${randomCount}`
            : 'Клікніть по кнопці, щоб отримати рандомне число'}
        </p>
        <A onGetNumber={this.getFactorCount} count={randomCount} />
      </div>
    );
  }
}

export default Task2;
