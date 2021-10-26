/**
 * Common testing scenario is to verify that a component action will change
 * the state as expected
 */

import { render, fireEvent } from '@testing-library/react';
import { ChangeRedux } from './ChangeRedux';
import { Provider } from 'react-redux';
import { createStore } from '../store';

describe('ChangeRedux', () => {
  it('clicking the button should modify redux state', () => {
    const store = createStore();
    const { container } = render(
      <Provider store={store} >
        <ChangeRedux />
      </Provider>
    )
    expect(store.getState().user).toBeNull();
    const button = container.getElementsByTagName('button')[0]
    fireEvent.click(button);
    expect(store.getState().user).toEqual({
      firstName: 'Yariv',
      lastName: 'Katz'
    });
  })
})
