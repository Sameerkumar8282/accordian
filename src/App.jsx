import React from 'react'
import CollapsablePanel from './components/CollapsablePanel'

const App = () => {
  
  return (
    <div>
      <CollapsablePanel Title={"Title 1"} Content={"content 1"}/>
      <CollapsablePanel  Title={"Title 2"} Content={"content 2"} />
    </div>
  )
}

export default App