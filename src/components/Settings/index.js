import React from 'react'
import styled from 'styled-components'
import { action } from '@storybook/addon-actions'

import { SettingsRow } from '../SettingsRow'
import { Card } from '../Card'

export const Settings = () => (
  <div style={{ flex: 1 }}>
    <Card style={{ padding: '10px 20px 20px' }}>
      <Header>General Account Settings</Header>
      <SettingsContainer>
        <SettingsRow
          label="Name"
          value="John Wick"
          actionLabel="Edit"
          onChange={action('onChange')}
        />
        <SettingsRow
          label="Username"
          value="JohnW"
          actionLabel="Edit"
          onChange={action('onChange')}
        />
        <SettingsRow
          label="Contact"
          value="john.w@gmail.com"
          actionLabel="Edit"
          onChange={action('onChange')}
        />
        <SettingsRow
          label="Ad account contact"
          value="john.w@gmail.com"
          actionLabel="Edit"
          onChange={action('onChange')}
        />
      </SettingsContainer>
    </Card>
  </div>
)

const Header = styled.h2`
  font-size: 16px;
`

const SettingsContainer = styled.ul`
  border-top: 1px solid #aaa;
  border-bottom: 1px solid #aaa;

  > * + * {
    border-top: 1px solid #ebedf0;
  }
`
