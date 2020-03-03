import { useState } from 'react'

const useToggle = (init = false) => {
  const [value, setValue] = useState(init)

  return { value, setValue }
}

export default useToggle
