// @flow

import React from 'react'
import type { Node } from 'react'
import classnames from 'classnames'

type Props = {
  children: Node,
  onSubmit: (event: SyntheticEvent<HTMLFormElement>) => any,
  className: string,
}

export default function Form({ onSubmit, children, className }: Props) {
  const handleSubmit = event => {
    event.preventDefault()
    onSubmit(event)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={classnames({ [className]: className })}
    >
      {children}
    </form>
  )
}
