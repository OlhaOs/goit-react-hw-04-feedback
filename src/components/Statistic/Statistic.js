import css from './Statistic.module.css';
import PropTypes from 'prop-types';

export default function Statistic({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <>
      <div className={css.statistic}>
        {total === 0 ? (
          <p>There is no feedBack</p>
        ) : (
          <>
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
            <p>Total: {total}</p>
            {positivePercentage ? (
              <p>Positive FeedBack: {Math.round(positivePercentage)}%</p>
            ) : (
              <p>Positive FeedBack: 0%</p>
            )}
          </>
        )}
      </div>
    </>
  );
}
Statistic.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
