import { use, useEffect, useState } from "react";

interface PersonModel {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
}

const initialPerson: PersonModel = {
  firstName: "",
  lastName: "",
  email: "",
  address: "",
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
      <br />
    </div>
  );
};
