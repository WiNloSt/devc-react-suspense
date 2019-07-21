import React from 'react'
import { storiesOf } from '@storybook/react'
import { createGlobalStyle } from 'styled-components'

import { Post } from '.'

storiesOf('Post', module)
  .addDecorator(grayBackground)
  .add('no props', () => <Post />)

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
