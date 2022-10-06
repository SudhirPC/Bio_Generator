import React, { useState } from "react";
import Datas from "./Data.js";
export const Main = () => {
  const [data, setData] = useState({
    name: "Charlie",
    location: "Alberta, Canada",
    school: "the University of Utah",
    major: "Information Technology",
    occupation: "Journalist for a local newspaper",
    religiousBackgrpund: "atheist, and has no experience with spiritual things",
    reasonForMeeting:
      "is trying to find [PossessivePronoun] purpose in life outside of track and field and school",
  });

  const [gender, setGender] = useState("He");
  let [count, setCount] = useState(0);
  const [location2, setLocation2] = useState(true);
  const [enteredschool, setenteredschool] = useState(true);
  const [enteredOccupation, setenteredOccupation] = useState(true);
  const [religiousBackgrpund2, setReligiousBackgrpund2] = useState(true);
  const [reasonForMeeting2, setReasonForMeeting2] = useState(true);

  const handleGender = (e) => {
    console.log("gender:", e.target.value);
    e.target.value === "male" ? setGender("He") : setGender("She");
  };

  const handlechange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleDatas = (key, value) => {
    console.log(key, Datas.Name[count], count);
    if (count > 4) {
      count = 0;
    }
    setData({
      ...data,
      [key]: value[count],
    });
    setCount(count + 1);
  };

  const handleCheck = (e, setfun) => {
    e.target.checked ? setfun(true) : setfun(false);
  };

  return (
    <div className="container">
      {/* ------------------------- Options  Div---------------------------*/}
      <div className="option-div">
        <h1 className="heading text-center">
          {" "}
          <i className="text-2xl">
            {" "}
            <h1>Options</h1>
          </i>
        </h1>

        <div className="option-div-child">
          <div>Name :</div>
          <input
            name="name"
            value={data.name}
            type="text"
            onChange={handlechange}
          />
          <div>Gender : </div>
          <select name="" id="" onChange={handleGender}>
            <option value="male"> Male </option>
            <option value="female"> Female </option>
          </select>
          <button onClick={() => handleDatas("name", Datas.Name)}>
            Random Name
          </button>
        </div>

        <div className="option-div-child">
          <input
            type="checkbox"
            defaultChecked={true}
            onChange={(e) => handleCheck(e, setLocation2)}
          />
          <div> Location : </div>
          <input
            name="location"
            value={data.location}
            type="text"
            onChange={handlechange}
          />
          <button onClick={() => handleDatas("location", Datas.Location)}>
            {" "}
            Random Location{" "}
          </button>
        </div>

        <div style={{ marginBottom: "0" }} className="option-div-child">
          <input
            type="checkbox"
            defaultChecked={true}
            onChange={(e) => handleCheck(e, setenteredschool)}
          />
          <div> School : </div>
          <input
            name="school"
            value={data.school}
            type="text"
            onChange={handlechange}
          />
          <button onClick={() => handleDatas("school", Datas.School)}>
            Random School
          </button>
        </div>
        <div style={{ marginTop: "0" }} className="option-div-child">
          <div> Major :</div>
          <input
            name="major"
            value={data.major}
            type="text"
            onChange={handlechange}
          />
          <button onClick={() => handleDatas("major", Datas.Major)}>
            {" "}
            Random Major{" "}
          </button>
        </div>

        <div className="option-div-child">
          <input
            type="checkbox"
            defaultChecked={true}
            onChange={(e) => handleCheck(e, setenteredOccupation)}
          />
          <div> Occupation : </div>
          <input
            name="occupation"
            value={data.occupation}
            type="text"
            onChange={handlechange}
          />
          <button onClick={() => handleDatas("occupation", Datas.Occupation)}>
            {" "}
            Random Occupation{" "}
          </button>
        </div>
        <div
          style={{ display: "block", textAlign: "left" }}
          className="option-div-child"
        >
          <div style={{ display: "flex" }}>
            <input
              type="checkbox"
              defaultChecked={true}
              onChange={(e) => handleCheck(e, setReligiousBackgrpund2)}
            />
            <div> Religious Backgrpund : </div>
          </div>
          <textarea
            style={{ width: "95%", height: "60px", margin: "10px" }}
            name="religiousBackgrpund"
            value={data.religiousBackgrpund}
            type="text"
            onChange={handlechange}
          />
          <button
            onClick={() =>
              handleDatas("religiousBackgrpund", Datas.ReligiousBackgrpund)
            }
          >
            {" "}
            Random Religion{" "}
          </button>
        </div>
        <div
          style={{ display: "block", textAlign: "left" }}
          className="option-div-child"
        >
          <div style={{ display: "flex" }}>
            <input
              type="checkbox"
              defaultChecked={true}
              onChange={(e) => handleCheck(e, setReasonForMeeting2)}
            />
            <div> Reason for meeting with missionaries: </div>
          </div>
          <textarea
            className="text-area-overflow "
            name="reasonForMeeting"
            value={data.reasonForMeeting}
            type="text"
            onChange={handlechange}
          />
          <button
            className="mb-4"
            onClick={() =>
              handleDatas("reasonForMeeting", Datas.ReasonForMeeting)
            }
          >
            {" "}
            Restoration{" "}
          </button>
          <button
            className="mb-4"
            onClick={() =>
              handleDatas("reasonForMeeting", Datas.ReasonForMeeting)
            }
          >
            {" "}
            Plan of Salvation{" "}
          </button>
          <button
            className="mb-4"
            onClick={() =>
              handleDatas("reasonForMeeting", Datas.ReasonForMeeting)
            }
          >
            {" "}
            Gospel of Christ{" "}
          </button>
          <button
            className="mb-4"
            onClick={() =>
              handleDatas("reasonForMeeting", Datas.ReasonForMeeting)
            }
          >
            {" "}
            Law of Chastity{" "}
          </button>
          <button
            className="mb-4"
            onClick={() =>
              handleDatas("reasonForMeeting", Datas.ReasonForMeeting)
            }
          >
            {" "}
            Word of Wisdom{" "}
          </button>
          <button
            className="mb-4"
            onClick={() =>
              handleDatas("reasonForMeeting", Datas.ReasonForMeeting)
            }
            cc
          >
            {" "}
            Any Lesson{" "}
          </button>
        </div>
      </div>
      {/* ------------------------- result div---------------------------*/}
      <div className="result-div">
        <h1 className="heading">
          {" "}
          <i className="text-2xl text-center">
            {" "}
            <h1>Result</h1>
          </i>
        </h1>
        <div style={{ padding: "20px" }} className="option-div-child">
          {location2
            ? `${data.name} is from ${data.location}.`
            : `You are teaching ${data.name}. `}
          {gender} is studying {data.major}{" "}
          {enteredschool ? `at ${data.school}.` : null}
          {enteredOccupation
            ? `${gender} currently works as a ${data.occupation}.`
            : null}
          {religiousBackgrpund2
            ? `${gender} was raised ${data.religiousBackgrpund}.`
            : null}
          {reasonForMeeting2 ? `${gender} ${data.reasonForMeeting}.` : null}
        </div>
      </div>
    </div>
  );
};
