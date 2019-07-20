import React from 'react'
import { storiesOf } from '@storybook/react'
import { createGlobalStyle } from 'styled-components'

import { Card } from '.'

storiesOf('Card', module)
  .addDecorator(grayBackground)
  .add('no props', () => <Card>content</Card>)

function grayBackground(storyFn) {
  return (
    <>
      <GlobalStyle />
      {storyFn()}
    </>
  )
}

const GlobalStyle = createGlobalStyle`
  html {
    background-color: #ccc;
  }
`
