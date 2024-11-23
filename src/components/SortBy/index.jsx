import React, { useState } from 'react';
import './style.css';
import { OptionsModal } from '../OptionsModal';
import { sortByOptions } from './constants';

export const SortBy = ({ selectedOption, onSortingOptionChange }) => {
  const options = Object.values(sortByOptions);

  const [open, setOpen] = useState(false);

  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  const setSortingOption = (option) => {
    onSortingOptionChange(option);
    closeModal();
  };

  return (
    <React.Fragment>
      <button
        className={open ? 'sortByButton sortByButtonClicked' : 'sortByButton'}
        onClick={openModal}>
        Sort by...
      </button>
      {open && (
        <OptionsModal
          title="Sort by"
          options={options}
          selectedOption={selectedOption}
          onClose={closeModal}
          onOptionChange={setSortingOption}
        />
      )}
    </React.Fragment>
  );
};
