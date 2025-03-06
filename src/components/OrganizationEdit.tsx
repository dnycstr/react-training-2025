import { useState } from "react";
import { OrganizationModel } from "../parenttsx/Organization";

export const OrganizationEdit = () => {
  const [searchId, setSearchId] = useState<number>(0);
  const [newOrganization, setNewOrganization] = useState<OrganizationModel>({
    id: 0,
    name: "",
    description: "",
  });
  return (
    <div>
      <div>
        <h2>Edit Organization</h2>
      </div>
      <div>
        <span> ID</span>
        <input
          type="text"
          value={searchId}
          onChange={(e) => {
            setSearchId(Number(e.target.value));
          }}
        />
        <button
          type="button"
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
        <span>Name</span>
        <input
          type="text"
          value={newOrganization.name}
          onChange={(e) => {
            setNewOrganization({ ...newOrganization, name: e.target.value });
          }}
        />
      </div>
      <div>
        <span>Description</span>
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
      <button
        type="button"
        onClick={() => {
          fetch(`https://localhost:7034/api/organizations/${searchId}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newOrganization),
          }).then((response) => {
            if (response.ok) {
              alert("Organization edited successfully");
            } else {
              alert("Organization edit failed");
            }
          });
        }}
      >
        Edit
      </button>
    </div>
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
