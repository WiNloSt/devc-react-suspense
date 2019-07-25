import React from 'react'
import { storiesOf } from '@storybook/react'

import { Post } from '.'

storiesOf('Post', module).add('no props', () => <Post />)
