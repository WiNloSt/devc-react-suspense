import React from 'react'
import styled from 'styled-components'

export function SettingsRow({ label, value, actionLabel }) {
  return (
    <SettingsRowContainer>
      <span>{label}</span>
      <span>{value}</span>
      <span>{actionLabel}</span>
    </SettingsRowContainer>
  )
}

const SettingsRowContainer = styled.div`
  font-size: 12px;
  padding: 10px 10px;

  &:hover {
    background-color: #f5f6f7;
    cursor: pointer;
  }

  > *:first-child {
    display: inline-block;
    width: 170px;
    font-weight: 600;
  }

  > *:nth-child(2) {
    color: #90949c;
    font-weight: 600;
  }

  > *:last-child {
    float: right;
    color: #365899;

    &:hover {
      text-decoration: underline;
    }
  }
`
