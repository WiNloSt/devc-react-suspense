import React, { useEffect, useState } from 'react'
import { SettingsRow } from './SettingsRow'
import { SettingsContainer } from './Settings/index'
import { settingsService } from '../services/settings'

export default SettingsContentContainer

function SettingsContentContainer({ form, setForm, setFormState }) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    settingsService.get().then(result => {
      setFormState(result)
      setLoading(false)
    })
  })

  return <SettingsContent loading={loading} form={form} setForm={setForm} />
}

function SettingsContent({ loading, form, setForm }) {
  if (loading) {
    return <>loading...</>
  }

  return (
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
  )
}
