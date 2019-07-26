import React from 'react'
import styled from 'styled-components'

import { SettingsRow } from '../SettingsRow'
import { Card } from '../Card'

export const Settings = ({ loading, form, setForm }) => {
  if (loading) {
    return (
      <div style={{ flex: 1 }}>
        <Card style={{ padding: '10px 20px 20px' }}>
          <Header>General Account Settings</Header>
          loading...
        </Card>
      </div>
    )
  }
  return (
    <div style={{ flex: 1 }}>
      <Card style={{ padding: '10px 20px 20px' }}>
        <Header>General Account Settings</Header>
        <SettingsContainer>
          <SettingsRow
            label="Name"
            value={form.name}
            actionLabel="Edit"
            onChange={setForm('name')}
          />
          <SettingsRow
            label="Username"
            value={form.username}
            actionLabel="Edit"
            onChange={setForm('username')}
          />
          <SettingsRow
            label="Contact"
            value={form.contact}
            actionLabel="Edit"
            onChange={setForm('contact')}
          />
          <SettingsRow
            label="Ad account contact"
            value={form.adsContact}
            actionLabel="Edit"
            onChange={setForm('adsContact')}
          />
        </SettingsContainer>
      </Card>
    </div>
  )
}
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
