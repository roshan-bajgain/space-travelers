import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import Table from "react-bootstrap/Table";
import { joinMission, getMissions, leaveMission } from "../redux/Missions";

const selectMissions = (state) => state.missions;
const Missions = () => {
  const selectedMissions = useSelector(selectMissions);
  const dispatch = useDispatch();
  const getMissionsData = () => {
    if (selectedMissions.length === 0) {
      dispatch(getMissions());
    }
  };
  useEffect(() => {
    getMissionsData();
  }, []);
  return (
    <div>
      <Table striped bordered hover size="sm" className="table">
        <thead>
          <tr>
            <th> Mission </th> <th> Description </th> <th> Status </th>{" "}
            <th> {} </th>{" "}
          </tr>{" "}
        </thead>{" "}
        <tbody>
          {" "}
          {selectedMissions.map((m) => (
            <tr key={uuidv4()}>
              <td className="mission-name"> {m.mission_name} </td>{" "}
              <td> {m.mission_description} </td>{" "}
              <td className="status" width="100px">
                {" "}
                {m.isReserved ? (
                  <div
                    className="primary"
                    bg="success"
                    style={{ backgroundColor: "blue", width: "130px" }}
                  >
                    {" "}
                    ACTIVE MEMBER{" "}
                  </div>
                ) : (
                  <div
                    className="secondary"
                    bg="secondary"
                    style={{ backgroundColor: "grey", width: "130px" }}
                  >
                    {" "}
                    NOT A MEMBER{" "}
                  </div>
                )}{" "}
              </td>{" "}
              <td className="status" width="150px">
                {" "}
                {m.isReserved ? (
                  <button
                    type="button"
                    className="join"
                    style={{ border: "1px solid red", width: "130px" }}
                    variant="outline-danger"
                    onClick={() => dispatch(leaveMission(m.mission_id))}
                  >
                    {" "}
                    Leave Mission{" "}
                  </button>
                ) : (
                  <button
                    type="button"
                    className="leave"
                    variant="outline-dark"
                    style={{ border: "1px solid grey", width: "100px" }}
                    onClick={() => dispatch(joinMission(m.mission_id))}
                  >
                    {" "}
                    Join Mission{" "}
                  </button>
                )}{" "}
              </td>{" "}
            </tr>
          ))}{" "}
        </tbody>{" "}
      </Table>{" "}
    </div>
  );
};

export default Missions;
