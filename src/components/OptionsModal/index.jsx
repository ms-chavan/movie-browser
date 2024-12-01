import { SORTING_TYPES } from '../../containers/Toolbar/constant';
import { IconClose } from '../Icons';
import { ArrowDown, ArrowUp } from '../Icons/index';
import './style.css';
export const OptionsModal = ({ title, options, selectedOption, onClose, onOptionChange }) => {
  return (
    <div className="optionsModal" data-testid="optionsModal">
      <div className="header">
        <span data-testid="modalTitle">{title}</span>
        <span className="iconClose" onClick={onClose}>
          <IconClose />
        </span>
      </div>
      {options.map((option) => (
        <div
          key={`${option.name}_${option.type}`}
          className={getOptionClasses(selectedOption, option)}
          onClick={() => onOptionChange(option)}>
          {option.name} {option.type === SORTING_TYPES.ASC ? <ArrowUp /> : <ArrowDown />}
        </div>
      ))}
    </div>
  );
};

function getOptionClasses(selectedOption, currentOption) {
  const classes = 'option';
  const isCurrentOptionSelected =
    selectedOption.name === currentOption.name && selectedOption.type === currentOption.type;

  if (isCurrentOptionSelected) {
    return classes.concat(' selectedOption');
  }
  return classes;
}
