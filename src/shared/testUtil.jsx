import { Provider } from 'react-redux';
import { render } from '@testing-library/react';

export const renderWithRedux = (Component, store, props) => {
  render(
    <Provider store={store}>
      <Component {...props} />
    </Provider>
  );
};
