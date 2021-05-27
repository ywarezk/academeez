/**
 * Unit testing the header
 *
 * Created April 27th, 2020
 * @author: ywarezk
 * @version: 1.0.0
 * @copyright: Nerdeez LTD
 */

import React, { useEffect, useRef, useState } from 'react';
import { Header } from './Header';
import { expect } from 'chai';
import { render, waitFor } from '@testing-library/react';
import { LayoutContext } from '../layout.context';
import { ThemeProvider } from '@academeez/az/styles';

const HeaderWrapper = () => {
  const header = useRef();
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setCounter(1);
  }, [])

  return (
    <ThemeProvider>
      <LayoutContext.Provider value={{ header }}>
        <div ref={header} />
        <Header />
      </LayoutContext.Provider>
    </ThemeProvider>
  )
}

describe('<Header />', () => {
  beforeEach(async () => {
    render(
      <HeaderWrapper />
    )
    await waitFor(() => expect(document.getElementsByTagName('header').length > 0).to.equal(true))
  })

  it.only('hello', function(done) {
    this.timeout(60000000);
  })

})
