import React from 'react'
import styled from 'styled-components'

import { Menu } from '../Menu'

export function Sidebar() {
  return (
    <SidebarContainer>
      <Menu>
        <Menu.Item active>News Feed</Menu.Item>
        <Menu.Item>Settings</Menu.Item>
      </Menu>
    </SidebarContainer>
  )
}

const SidebarContainer = styled.div`
  max-width: 180px;
`
