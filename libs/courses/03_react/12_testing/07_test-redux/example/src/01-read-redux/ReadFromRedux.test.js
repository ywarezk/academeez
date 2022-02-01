/**
 * expect that my component looks good on different scenarios of redux state
 */

import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { ReadFromRedux } from './ReadFromRedux';
import { createStore } from '../store';
import { slice } from '../slice';

describe('ReadFromRedux', () => {
  it('should display according to user in redux state', () => {
    const store = createStore();
    const { container } = render(
      <Provider store={store}>
        <ReadFromRedux />
      </Provider>
    );
    const h1 = container.getElementsByTagName('h1')[0];
    expect(h1.textContent).toBe('Hello Guest');
    store.dispatch(
      slice.actions.setUser({
        firstName: 'test',
        lastName: 'world',
      })
    );
    expect(h1.textContent).toBe('Hello test');
  });

  /**
   * you can start redux in a current state and check the result
   */
  it('preloadedState test', () => {
    const { container } = render(
      <Provider
        store={createStore({
          user: {
            firstName: 'Preloaded State',
            lastName: 'test',
          },
        })}
      >
        <ReadFromRedux />
      </Provider>
    );
    const h1 = container.getElementsByTagName('h1')[0];
    expect(h1.textContent).toBe('Hello Preloaded State');
  });
});
