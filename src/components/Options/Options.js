import propTypes from 'prop-types';
import s from './Options.module.css'


function Options({ options, onBtnClick }) {
    return (
    <div>
      {options.map(option => (
        <button className={s.btn} type="button" onClick={() => onBtnClick(option)}>
          {option}
        </button>
      ))}
    </div>
  );
}

Options.propTypes = {
  options: propTypes.arrayOf(propTypes.string.isRequired).isRequired,
  onBtnClick: propTypes.func.isRequired,
};

export default Options;
