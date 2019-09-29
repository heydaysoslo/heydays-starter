import * as React from 'react'
import { useState, useEffect } from 'react'

interface Props {
  name: string
  phone?: number
}

const Typescript: React.FC<Props> = ({ name, phone }) => {
  const [newName, setNewName] = useState<string>(name)

  useEffect(() => {
    setNewName('Mike')
  })

  return (
    <div className="Typescript">
      <p>I'm typsescript</p>
      {name}
      {newName}
      {phone && phone}
    </div>
  )
}

export default Typescript
