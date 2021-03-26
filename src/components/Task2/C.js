import s from './Task2.module.css';

const C = ({ count, onGetNumber }) => {
  return (
    <div className={s.c}>
      <h2 className={s.subtitle}>Компонент C</h2>
      <button
        className={s.button}
        type="button"
        onClick={() => onGetNumber((Math.random() * 100).toFixed(1))}
      >
        {count ? `RandomCount: ${count}` : 'Get random count'}
      </button>
    </div>
  );
};

export default C;
