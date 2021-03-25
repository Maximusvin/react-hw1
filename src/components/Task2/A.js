import B from './B';
import s from './Task2.module.css';

const A = ({ count, onGetNumber }) => (
  <div className={s.a}>
    <h2 className={s.subtitle}>Компонент А</h2>
    <B count={count} onGetNumber={onGetNumber} />
  </div>
);

export default A;
