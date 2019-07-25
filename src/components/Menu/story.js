import React from 'react'
import { storiesOf } from '@storybook/react'

import { Menu } from '.'

storiesOf('Menu', module)
  .add('no props', () => {
    return (
      <Menu>
        <Menu.Item>News Feed</Menu.Item>
        <Menu.Item>Settings</Menu.Item>
      </Menu>
    )
  })
  .add('active', () => {
    return (
      <Menu>
        <Menu.Item active>News Feed</Menu.Item>
        <Menu.Item>Settings</Menu.Item>
      </Menu>
    )
  })
