import React, { useState, useEffect } from 'react'

import { Settings } from '.'
import { settingsService } from '../../services/settings'

export function SettingsContainer() {
  const [formState, setFormState] = useState({
    name: null,
    username: null,
    contact: null,
    adsContact: null
  })

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    settingsService.get().then(result => {
      setFormState(result)
      setLoading(false)
    })
  })

  function setForm(fieldName) {
    return value =>
      setFormState(formState => ({
        ...formState,
        [fieldName]: value
      }))
  }

  return <Settings loading={loading} form={formState} setForm={setForm} />
}
