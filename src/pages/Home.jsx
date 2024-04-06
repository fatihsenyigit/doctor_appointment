import { useState } from "react"
import AppointmentList from "../components/AppointmentList"
import Doctors from "../components/Doctors"
import { Container } from "react-bootstrap"
import { appointmentData } from "../helpers/data"

const Home = () => {
  const [appointment, setAppointment] = useState(JSON.parse(localStorage.getItem('appointments')) || [])
  return (
    <div>
      <h1 className="home-title mt-4">Saigon HOSPITAL</h1>
      <Container>
        <Doctors appos={appointment} setAppos={setAppointment} />
        <AppointmentList appos={appointment} setAppos={setAppointment} />
      </Container>
    </div>
  );
}

export default Home