import { useState } from 'react'

import './App.css'
import EntryForm from './components/EntryForm'
import EntryHistory from './components/layouts/EntryHistory'
import EntriesPage from './pages/EntriesPage'

function App() {
  return (
    <div className='flex flex-col space-y-2'>
      <EntriesPage/>
    </div>
  )
}

export default App
