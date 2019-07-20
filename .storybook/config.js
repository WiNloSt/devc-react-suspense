import { configure } from '@storybook/react'
import '../src/App.css'

function loadStories() {
  const allStories = require.context('../src/', true, /story\.js/)

  allStories.keys().forEach(allStories)
}

configure(loadStories, module)
