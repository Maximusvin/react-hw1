import s from './Task1.module.css';

const Title = ({ value }) => (
  <h1 className={s.title}>{value ? value : 'Task-1'}</h1>
);

export default Title;
