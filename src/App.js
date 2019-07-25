import './setup'
import React from 'react'
import styled from 'styled-components'

import { Nav } from './components/Nav'
import { Sidebar } from './components/Sidebar'
import { Timeline } from './components/Timeline'

function App() {
  return (
    <div>
      <Nav />
      <Content>
        <Sidebar />
        <Timeline />
      </Content>
    </div>
  )
}

export default App

const Content = styled.div`
  padding-top: 12px;
  margin: 0 auto;
  max-width: 800px;
  padding-right: 200px;
  display: flex;

  > *:first-child {
    flex: 1;
    margin-right: 12px;
  }
`
