import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { TiTickOutline } from "react-icons/ti";
import { MdOutlineCancel } from "react-icons/md";
import addLocal from "../pages/utils";

const AppointmentList = ({ appos, setAppos }) => {
  console.log(appos);
  const remove = (id) => {
    const newAppo = appos?.filter((e) => e.id !== id);
    setAppos(newAppo)
    addLocal('appointments', newAppo)
  };
  const toggle = (id) => {
    const newAppo = appos.map((e) =>
      e.id === id ? { ...e, consulted: !e.consulted } : e,
    );
    setAppos(newAppo)
    addLocal('appointments', newAppo)
  };

  return (
    <Container className="p-2">
      <h3 className="appointment-title">Appointment List</h3>
      <Row>
        {appos.length ? (
          <>
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
                  <div>
                    {item.consulted && (
                      <Button onClick={() => toggle(item.id)} variant="warning">
                        Consulted
                      </Button>
                    )}
                  </div>
                  <div className="d-flex">
                    <div onClick={() => toggle(item.id)} className="tick">
                      <TiTickOutline />
                    </div>
                    <div onClick={() => remove(item.id)} className="cancel">
                      <MdOutlineCancel />
                    </div>
                  </div>
                </div>
              </Container>
            ))}
          </>
        ) : (
          <>
            <h4 className="text-center"> there is no appointment !!!</h4>
            <img
              className="m-auto"
              style={{ width: "50%" }}
              alt="appointment"
              src="./img/appointment.jpg"
            ></img>
          </>
        )}
      </Row>
    </Container>
  );
};

export default AppointmentList;
