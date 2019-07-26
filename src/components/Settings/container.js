// @ts-nocheck
import React, { useState } from 'react'

import { Settings } from '.'

export function SettingsContainer() {
  const [formState, setFormState] = useState(null)

  function setForm(fieldName) {
    return value =>
      // eslint-disable-next-line no-undef
      setFormStat(formState => ({
        ...formState,
        [fieldName]: value
      }))
  }

  return (
    <Settings form={formState} setForm={setForm} setFormState={setFormState} />
  )
}
