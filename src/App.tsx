import { useState } from 'react'

import './App.css'
import EntryForm from './components/EntryForm'
import EntryHistory from './components/layouts/EntryHistory'

function App() {
  return (
    <div className='flex flex-col space-y-2'>
      <EntryForm/>
      <EntryHistory/>
    </div>
  )
}

export default App
