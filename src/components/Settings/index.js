import React from 'react'
import styled from 'styled-components'

import { Card } from '../Card'
import SettingsContentContainer from '../SettingsContent'
import { MySuspense } from '../MySuspense'

export const Settings = ({ form, setForm, setFormState }) => {
  return (
    <div style={{ flex: 1 }}>
      <Card style={{ padding: '10px 20px 20px' }}>
        <Header>General Account Settings</Header>
        <MySuspense fallback="loading..." errorFallback="wow">
          <SettingsContentContainer
            form={form}
            setForm={setForm}
            setFormState={setFormState}
          />
        </MySuspense>
      </Card>
    </div>
  )
}

const Header = styled.h2`
  font-size: 16px;
`

export const SettingsContainer = styled.ul`
  border-top: 1px solid #aaa;
  border-bottom: 1px solid #aaa;

  > * + * {
    border-top: 1px solid #ebedf0;
  }
`
