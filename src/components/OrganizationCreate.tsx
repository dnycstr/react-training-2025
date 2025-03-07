import { useState } from "react";
import { OrganizationModel } from "../parenttsx/Organization";

export const OrganizationCreate = () => {
  const [newOrganization, setNewOrganization] = useState<OrganizationModel>({
    id: 0,
    name: "",
    description: "",
  });
  return (
    <div style={{ border: "3px solid", padding: "10px", borderColor: "blue"}}>
      <div>
        <h2>Create Organization</h2>
      </div>
      <div>
        <span>Name: </span>
        <input
          type="text"
          value={newOrganization.name}
          onChange={(e) => {
            setNewOrganization({ ...newOrganization, name: e.target.value });
          }}
        />
      </div>
      <div>
        <span>Description: </span>
        <input
          type="text"
          value={newOrganization.description}
          onChange={(e) => {
            setNewOrganization({
              ...newOrganization,
              description: e.target.value,
            });
          }}
        />
        </div>
      <div style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}>
      <button
        type="button" style={{ backgroundColor: "blue", color: "white"}}
        onClick={() => {
          fetch("https://localhost:7034/api/organizations", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newOrganization),
          }).then((response) => {
            if (response.ok) {
              alert("Organization created successfully");
            } else {
              alert("Organization creation failed");
            }
          });
        }}
      >
        Create
      </button>
    </div></div>
  );
};

/*
ID      FirstName       LastName
1       John            Doe
2       Jane            Doe


[{
    id: 1,
    firstName: "John",
    lastName: "Doe"
},
{
    id: 2,
    firstName: "Jane",
    lastName: "Doe"
}]


*/
