import C from './C';
import s from './Task2.module.css';

const B = ({ count, onGetNumber }) => {
  return (
    <div className={s.b}>
      <h2 className={s.subtitle}>Компонент B</h2>
      <C count={count} onGetNumber={onGetNumber} />
    </div>
  );
};

export default B;
