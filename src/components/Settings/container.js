import React, { useState } from 'react'

import { Settings } from '.'

export function SettingsContainer() {
  const [formState, setFormState] = useState({
    name: null,
    username: null,
    contact: null,
    adsContact: null
  })

  function setForm(fieldName) {
    return value =>
      setFormState(formState => ({
        ...formState,
        [fieldName]: value
      }))
  }

  return <Settings form={formState} setForm={setForm} />
}
