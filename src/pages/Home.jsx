import AppointmentList from "../components/AppointmentList"
import Doctors from "../components/Doctors"
import { Container } from "react-bootstrap"

const Home = () => {
  return (
    <div>
      <h1 className="home-title mt-4">Merkez Efendi HOSPITAL</h1>
      <Container>
        <Doctors />
        <AppointmentList />
      </Container>
    </div>
  );
}

export default Home