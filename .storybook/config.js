import '../src/setup'
import { configure } from '@storybook/react'

function loadStories() {
  const allStories = require.context('../src/', true, /story\.js/)

  allStories.keys().forEach(allStories)
}

configure(loadStories, module)
