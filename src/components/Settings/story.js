import React from 'react'
import { storiesOf } from '@storybook/react'
import { createGlobalStyle } from 'styled-components'

import { Settings } from '.'

storiesOf('Settings', module)
  .addDecorator(withWhiteBackground)
  .add('no props', () => <Settings />)

function withWhiteBackground(storyFn) {
  return (
    <>
      <GlobalStyle />
      {storyFn()}
    </>
  )
}

const GlobalStyle = createGlobalStyle`
body {
  background-color: #fff;
}
`
