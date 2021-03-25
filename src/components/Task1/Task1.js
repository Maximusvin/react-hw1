import React, { Component } from 'react';
import Title from './Title';
import s from './Task1.module.css';

class Task1 extends Component {
  state = {
    inputValue: '',
  };

  handleChangeInput = e => {
    this.setState({
      inputValue: e.target.value,
    });
  };

  render() {
    const { inputValue } = this.state;

    return (
      <div className={s.task}>
        <Title value={inputValue.trim()} />
        <input
          className={s.input}
          type="text"
          placeholder="Введіть текст"
          value={inputValue}
          onChange={this.handleChangeInput}
        />
      </div>
    );
  }
}

export default Task1;
