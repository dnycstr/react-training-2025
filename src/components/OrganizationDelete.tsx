import { useState } from "react";
import { OrganizationModel } from "../parenttsx/Organization";

export const OrganizationDelete = () => {
  const [searchId, setSearchId] = useState<number>(0);
  const [newOrganization, setNewOrganization] = useState<OrganizationModel>({
    id: 0,
    name: "",
    description: "",
  });
  return (
    <div style={{ border: "3px solid", padding: "10px", borderColor: "blue"}}>
      <div>
        <h2>Delete Organization</h2>
      </div>
      <div>
        <span> ID: </span>
        <input
          type="text"
          value={searchId}
          onChange={(e) => {
            setSearchId(Number(e.target.value));
          }}
        />
        <button
          type="button" style={{ backgroundColor: "blue", color: "white"}}
          onClick={() => {
            fetch(`https://localhost:7034/api/organizations/${searchId}`, {
              method: "GET",
            })
              .then((response) => response.json())
              .then((result) => {
                setNewOrganization(result);
              });
          }}
        >
          Search
        </button>
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
          fetch(`https://localhost:7034/api/organizations/${searchId}`, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newOrganization),
          }).then((response) => {
            if (response.ok) {
              alert("Organization deleted successfully");
            } else {
              alert("Organization delete failed");
            }
          });
        }}
      >
       Delete
      </button>
    </div> </div>
  );
};

