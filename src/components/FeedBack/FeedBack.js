import css from './FeedBack.module.css';
import PropTypes from 'prop-types';

export default function FeedBack({ onLeaveFeedback }) {
  const { btnGood, btnNeutral, btnBad } = css;
  return (
    <div>
      <button
        type="button"
        name="good"
        className={btnGood}
        onClick={onLeaveFeedback}
      >
        Good
      </button>
      <button
        type="button"
        name="neutral"
        className={btnNeutral}
        onClick={onLeaveFeedback}
      >
        Neutral
      </button>
      <button
        type="button"
        name="bad"
        className={btnBad}
        onClick={onLeaveFeedback}
      >
        Bad
      </button>
    </div>
  );
}

FeedBack.propTypes = {
  onLeaveFeedback: PropTypes.func,
};
