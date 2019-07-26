import './setup'
import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import styled from 'styled-components'

import { Nav } from './components/Nav'
import { Sidebar } from './components/Sidebar'
import { Timeline } from './components/Timeline'
import { SettingsContainer } from './components/Settings/container'

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Content>
          <Route path="/" component={Sidebar}></Route>
          <Route path="/" exact component={Timeline}></Route>
          <Route path="/settings" component={SettingsContainer}></Route>
        </Content>
      </div>
    </Router>
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
