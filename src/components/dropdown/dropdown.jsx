// @flow

import React, { useContext, useState } from 'react'
import type { Node } from 'react'
import classnames from 'classnames'

import styles from './dropdown.module.scss'

type Props = {
  children: Node,
}

type ContextType = {
  isOpen: boolean,
  toggle: () => void,
}

const DropdownContext = React.createContext<ContextType>({})

function Dropdown({ children }: Props) {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(status => !status)

  return (
    <DropdownContext.Provider value={{ isOpen, toggle }}>
      <div className={styles.container}>{children}</div>
    </DropdownContext.Provider>
  )
}

function DropdownButton({ children }: Props) {
  const { toggle } = useContext(DropdownContext)

  return (
    <button type="button" onClick={toggle} className={styles.button}>
      {children}
    </button>
  )
}

type DropdownContentProps = {
  children: ({ isOpen?: boolean, toggle?: () => void }) => Node,
}

function DropdownContent({ children }: DropdownContentProps) {
  const { isOpen, toggle } = useContext(DropdownContext)

  return (
    <div className={classnames(styles.content, { [styles.closed]: !isOpen })}>
      {children({ isOpen, toggle })}
    </div>
  )
}

Dropdown.Button = DropdownButton
Dropdown.Content = DropdownContent

export default Dropdown
