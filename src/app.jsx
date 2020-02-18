import React, { useState } from 'react'

import TextField from './components/text-field'

function App() {
  const [value, setValue] = useState('')

  return <TextField value={value} onChange={text => setValue(text)} />
}

export default App
