import css from './FeedBack.module.css';
import PropTypes from 'prop-types';

export default function FeedBack({ onLeaveFeedback }) {
  const { onGoodBtn, onNeutralBtn, onBadBtn } = onLeaveFeedback;
  const { btnGood, btnNeutral, btnBad } = css;
  return (
    <div>
      <button
        type="button"
        name="good"
        className={btnGood}
        onClick={onGoodBtn}
      >
        Good
      </button>
      <button
        type="button"
        name="neutral"
        className={btnNeutral}
        onClick={onNeutralBtn}
      >
        Neutral
      </button>
      <button
        type="button"
        name="bad"
        className={btnBad}
        onClick={onBadBtn}
      >
        Bad
      </button>
    </div>
  );
}

FeedBack.propTypes = {
  onLeaveFeedback: PropTypes.object,
};
