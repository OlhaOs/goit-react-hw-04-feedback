import css from './FeedBack.module.css';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';


export default function FeedBack({ options, onLeaveFeedback }) {

  
  return (
    <div>
      {options.map(option => (
        <button
          key={nanoid()}
          type="button"
          name={option}
          className={css.btn}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

FeedBack.propTypes = {
  onLeaveFeedback: PropTypes.func,
};

