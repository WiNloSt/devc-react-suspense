import React from 'react'
import styled from 'styled-components'

export const Menu = styled.ul`
  list-style: none;
`
Menu.Item = Item

function Item({ active, children }) {
  if (active) {
    return <ActiveItem>{children}</ActiveItem>
  }

  return <BaseItem>{children}</BaseItem>
}

const BaseItem = styled.li`
  padding-left: 10px;
  height: 28px;
  line-height: 28px;
  border: 1px solid #dddfe2;
  border-color: transparent;

  &:hover {
    border-color: #dddfe2;
    background-color: #f5f6f7;
    border-radius: 2px;
  }
`

const ActiveItem = styled(BaseItem)`
  border-color: #dddfe2;
  background-color: #f5f6f7;
  border-radius: 2px;
  color: #1d2129;
  font-weight: 600;
`
