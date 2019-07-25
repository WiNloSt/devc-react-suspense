import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { Menu } from '../Menu'

export function Sidebar({ location: { pathname } }) {
  return (
    <SidebarContainer>
      <Menu>
        <Link to="/">
          <Menu.Item active={pathname === '/'}>News Feed</Menu.Item>
        </Link>
        <Link to="/settings">
          <Menu.Item active={pathname === '/settings'}>Settings</Menu.Item>
        </Link>
      </Menu>
    </SidebarContainer>
  )
}

const SidebarContainer = styled.div`
  max-width: 180px;

  a {
    text-decoration: none;
  }

  a:visited {
    color: inherit;
  }
`
