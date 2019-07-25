import React from 'react'
import styled from 'styled-components'

import { Post } from '../Post'

export function Timeline() {
  return (
    <TimelineContainer>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </TimelineContainer>
  )
}

const TimelineContainer = styled.div`
  > * + * {
    margin-top: 10px;
  }
`
