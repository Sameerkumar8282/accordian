import React from 'react'
import CollapsablePanel from './components/CollapsablePanel'

const App = () => {
  
  return (
    <div>
      <CollapsablePanel Title={"Title 1"} initalCollapse={true}>
        <p>content 1</p>
        <p>content 2</p>
        <p>content 3</p>
      </CollapsablePanel>
      <CollapsablePanel  Title={"Title 2"} initalCollapse={false}>
      <p>content 1</p>
        <p>content 2</p>
        <p>content 3</p>
      </CollapsablePanel>
    </div>
  )
}

export default App