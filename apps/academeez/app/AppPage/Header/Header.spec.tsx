/* eslint-disable no-unused-expressions */
/* eslint-disable @nrwl/nx/enforce-module-boundaries */
/**
 * Unit testing the header
 *
 * Created April 27th, 2020
 * @author: ywarezk
 * @version: 1.0.0
 * @copyright: Nerdeez LTD
 */

import React from 'react';
import { Header } from './Header';
import { sanity } from '@nz/test/react';
import { createTimerPromise } from '@nz/test';
import { MockedHistoryProvider } from '../../../user';
import { MockRouterContext } from '@nz/test/next';
import { useHeaderBackground } from './header-transparent.hook';
import {expect} from 'chai';

describe('<Header />', () => {
  describe('transparent', () => {
    sanity(
      (
        <MockRouterContext>
          <MockedHistoryProvider extraUserFields={null}>
            <div className="mt-5 pt-5 pb-5" style={{ backgroundColor: 'rgba(0,0,0, 0.5)' }}>
              <Header />
            </div>
          </MockedHistoryProvider>
        </MockRouterContext>
      )
    )
  });

  describe('logged in', () => {
    sanity(
      (
        <MockRouterContext>
          <MockedHistoryProvider>
            <Header />
          </MockedHistoryProvider>
        </MockRouterContext>
      )
    );
  })

  describe('not logged in', () => {
    sanity(
      (
        <MockRouterContext>
          <MockedHistoryProvider extraUserFields={null}>
            <Header />
          </MockedHistoryProvider>
        </MockRouterContext>
      )
    )
  });

  describe('useHeaderTransparent()', () => {
    describe('true', () => {
      const TestHook = () => {
        useHeaderBackground(true);
        return (
          <Header />
        );
      }

      describe('not logged in', () => {

        const wrapper = sanity(
          (
            <MockRouterContext>
              <MockedHistoryProvider extraUserFields={null}>
                <TestHook />
              </MockedHistoryProvider>
            </MockRouterContext>
          )
        )

        it('the header should be transparent', async () => {
          await createTimerPromise();
          const nav = wrapper.current.find('nav');
          expect(nav.getDOMNode().classList.contains('bg-dark')).to.be.false
        })
      });
    });

    describe('false', () => {
      const TestHook = () => {
        useHeaderBackground(false);
        return (
          <Header />
        );
      }

      describe('not logged in', () => {
        const wrapper = sanity(
          (
            <MockRouterContext>
              <MockedHistoryProvider extraUserFields={null}>
                <TestHook />
              </MockedHistoryProvider>
            </MockRouterContext>
          )
        )

        it('the header should be transparent', async () => {
          await createTimerPromise()
          const nav = wrapper.current.find('nav');
          expect(nav.getDOMNode().classList.contains('bg-dark')).to.be.true
        })
      })

      describe('logged in', () => {
        sanity(
          (
            <MockRouterContext>
              <MockedHistoryProvider>
                <TestHook />
              </MockedHistoryProvider>
            </MockRouterContext>
          )
        )
      });
    })
  })
})
