// @flow

import React from 'react'

import styles from './text-field.module.scss'

type Props = {
  value: string,
  onChange: (text: string) => void,
  placeholder: string,
}

function TextField({ value, onChange, placeholder }: Props) {
  return (
    <input
      type="text"
      value={value}
      onChange={event => onChange(event.target.value)}
      className={styles.textField}
      placeholder={placeholder}
    />
  )
}

export default TextField
