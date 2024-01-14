
import './styles.css'
import EventDashboard from '../../features/events/dashboard/EventDashboard'
import Navbar from './nav/Navbar'
import { Container } from 'semantic-ui-react'
import { useState } from 'react'

function App() {
  const [formOpen, setFormOpen] = useState(false)

  return (
    <>
      <Navbar setFormOpen={setFormOpen} />
      <Container className='main'>
        <EventDashboard formOpen={formOpen} setFormOpen={setFormOpen} />
      </Container>
    </>
  )
}

export default App
