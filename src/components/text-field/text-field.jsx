// @flow

import React from 'react'

import './text-field.module.scss'

type Props = {
  value: string,
  onChange: (text: string) => void,
}

export default function TextField({ value, onChange }: Props) {
  return (
    <input
      type="text"
      value={value}
      onChange={event => onChange(event.target.value)}
    />
  )
}
