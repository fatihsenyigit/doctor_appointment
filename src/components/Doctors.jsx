import Container from "react-bootstrap/Container"
import AddModal from "../components/AddModal"
import {doctorData} from '../helpers/data'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Doctors = () => {
  return (
    <Container>
      <h3 className="doctors-title display-6">
        Our Doctors
      </h3>
      <Row className="gap-3 justify-content-center" xs={1} sm={2} md={3} lg={4} xl={5} >
            {doctorData.map((doctor)=>(
              <Col className="doctor-col d-flex flex-column align-content-between">
                <img src={doctor.img} alt={doctor.name} />
                <h5>{doctor.name}</h5>
                <p>{doctor.dep}</p>

              </Col>
            ))}
      </Row>
      <AddModal></AddModal>
    </Container>
  )
}

export default Doctors
