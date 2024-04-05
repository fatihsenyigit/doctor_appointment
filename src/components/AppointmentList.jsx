
import Container from "react-bootstrap/Container"
import Row from 'react-bootstrap/Row'
import { TiTickOutline } from "react-icons/ti";
import { MdOutlineCancel } from "react-icons/md";


const AppointmentList = ({appos, setAppos}) => {
  console.log(appos)
  const remove = (id) => {
    setAppos(appos.filter((e)=> e.id!==id))
  }

  return (
    <Container className="p-2">
      <h3 className="appointment-title">Appointment List</h3>
      <Row>
        {appos.map((item) => (
          <Container className="list-container" key={item.id}>
            <div className="list-left">
              <h3>{item.patient}</h3>
              <p>{item.doctor}</p>
            </div>
            <div className="list-middle">
              <div>{new Date(item.day).toLocaleDateString()}</div>
              <div>{new Date(item.day).toLocaleTimeString()}</div>
            </div>
            <div className="list-right">
              <div className="tick">
                <TiTickOutline />
              </div>
              <div onClick={()=>remove(item.id)} className="cancel">
                <MdOutlineCancel/>
              </div>
            </div>
          </Container>
        ))}
      </Row>
    </Container>
  );
}

export default AppointmentList
