import { use, useEffect, useState } from "react";

interface PersonModel {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  gender: string;
  Mnumber: string;
}

const initialPerson: PersonModel = {
  firstName: "",
  lastName: "",
  email: "",
  address: "",
  gender: "",
  Mnumber:"",
};

export const PersonalInformationForm = () => {
  const [person, setPerson] = useState(initialPerson);

  console.log(person);

  return (
    <div>
      <h1>Personal Information Form</h1>
      <div>
        <span>First Name: </span>
        <input
          type="text"
          value={person.firstName}
          onChange={(e) => {
            let currentPerson = { ...person, firstName: e.target.value };
            setPerson(currentPerson);
          }}
        />
      </div>
      <div>
        <span>Last Name: </span>
        <input
          type="text"
          value={person.lastName}
          onChange={(e) => {
            let currentPerson = { ...person, lastName: e.target.value };
            setPerson(currentPerson);
          }}
        />
      </div>
      <div>
        <span>Email: </span>
        <input
          type="text"
          value={person.email}
          onChange={(e) => {
            let currentPerson = { ...person, email: e.target.value };
            setPerson(currentPerson);
          }}
        />
      </div>
      <div>
        <span>Address: </span>
        <textarea
          value={person.address}
          onChange={(e) => {
            let currentPerson = { ...person, address: e.target.value };
            setPerson(currentPerson);
          }}
        />
      </div>
      <div>
        <span>Gender: </span>
        <input
        type="radio"
        name="gender"
        value="male"
        checked={person.gender === "male"}
        onChange={(e) => {
          let currentPerson = { ...person, gender: e.target.value };
          setPerson(currentPerson);
        }}/> Male
      <input
        type="radio"
        name="gender"
        value="female"
        checked={person.gender === "female"}
        onChange={(e) => {
          let currentPerson = { ...person, gender: e.target.value };
          setPerson(currentPerson);
        }}/> Female
      <input
        type="radio"
        name="gender"
        value="other"
        checked={person.gender === "other"}
        onChange={(e) => {
          let currentPerson = { ...person, gender: e.target.value };
          setPerson(currentPerson);
        }}/> Other
    </div>
    <div>
        <span>Mobile Number: </span>
        <input
          type="string"
          value={person.Mnumber}
          onChange={(e) => {
            let currentPerson = { ...person, Mnumber: e.target.value };
            setPerson(currentPerson);
          }}
        />
      </div>
      <br />
    </div>
  );
};
