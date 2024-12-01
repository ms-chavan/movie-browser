import React, { memo, useState } from 'react';
import './style.css';
import { OptionsModal } from '../OptionsModal';
import { arePropsSameBy } from '../../shared/util';
import { sortByOptions } from '../../containers/Toolbar/constant';

export const SortBy = memo(({ selectedOption, onSortingOptionChange }) => {
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
}, arePropsSameBy('selectedOption'));
