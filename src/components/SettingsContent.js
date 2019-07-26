import React, { useEffect, useState } from 'react'
import { SettingsRow } from './SettingsRow'
import { SettingsContainer } from './Settings/index'
import { settingsService } from '../services/settings'

export default SettingsContentContainer

function SettingsContentContainer({ form, setForm, setFormState }) {
  const [loading, setLoading] = useState(true)

  const [promise, setPromise] = useState(Promise.resolve())
  useEffect(() => {
    const promise = settingsService.get().then(result => {
      setFormState(result)
      setLoading(false)
    })
    setPromise(promise)
  }, [setFormState])

  function suspend() {
    if (!form) {
      throw promise
    }
  }

  return (
    <SettingsContent
      suspend={suspend}
      loading={loading}
      form={form}
      setForm={setForm}
    />
  )
}

function SettingsContent({ suspend, loading, form, setForm }) {
  suspend()
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
