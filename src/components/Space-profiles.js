// const Profiles = () => null;
/* eslint-disable max-len */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRocketsAction } from "../redux/Rockets";
import { fetchAllMissions } from "../redux/Missions";

const Profile = () => {
  const dispatch = useDispatch();
  const { rockets } = useSelector((state) => state.rockets);
  const missions = useSelector((state) => state.missions);
  useEffect(() => {
    if (!rockets) {
      dispatch(getRocketsAction());
    }
  }, []);
  useEffect(() => {
    if (!missions) {
      dispatch(fetchAllMissions());
    }
  }, []);
  return (
    <div className="grid grid-cols-3 w-full mx-auto">
      <section>
        <h2 className="text-2xl w-full flex justify-center items-center p-3 font-bold">
          My Rockets{" "}
        </h2>{" "}
        <ul className=" flex flex-col px-6 py-3">
          {" "}
          {rockets &&
            rockets
              .filter((rocket) => rocket.reserved === true)
              .map((filtered) => (
                <li className="border-gray-400 border p-6" key={filtered.id}>
                  {" "}
                  {filtered.rocket_name}{" "}
                </li>
              ))}{" "}
        </ul>{" "}
      </section>{" "}
      <section>
        <h2 className="text-2xl w-full flex justify-center items-center p-3 font-bold">
          My Missions{" "}
        </h2>{" "}
        <ul className=" flex flex-col px-6 py-3">
          {" "}
          {missions &&
            missions
              .filter((mission) => mission.isReserved === true)
              .map((reserve) => (
                <li className="border-gray-400 border  p-6" key={reserve.id}>
                  {" "}
                  {reserve.mission_name}{" "}
                </li>
              ))}{" "}
        </ul>{" "}
      </section>{" "}
      {/* <section>
                    <h2 className="text-2xl w-full flex justify-center items-center p-3 font-bold">
                      My Dragons{" "}
                    </h2>{" "}
                    <ul className=" flex flex-col px-6 py-3">
                      {" "}
                      {dragons &&
                        dragons
                          .filter((dragon) => dragon.reserved === true)
                          .map((reserve) => (
                            <li className="border-gray-400 border  p-6" key={reserve.id}>
                              {" "}
                              {reserve.name}{" "}
                            </li>
                          ))}{" "}
                    </ul>{" "}
                  </section>{" "} */}{" "}
    </div>
  );
};
export default Profile;
