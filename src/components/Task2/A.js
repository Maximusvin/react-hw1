import { useState } from 'react';
import B from './B';
import s from './Task2.module.css';

const A = ({ count, onGetNumber }) => {
  return (
    <div className={s.a}>
      <h2 className={s.subtitle}>Компонент А</h2>
      <B count={count} onGetNumber={onGetNumber} />
    </div>
  );
};

export default A;
