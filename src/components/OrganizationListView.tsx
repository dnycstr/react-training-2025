import { useEffect, useState } from "react";
import { OrganizationModel } from "../parenttsx/Organization";

export const OrganizationListView = () => {
  const [organizations, setOrganizations] = useState<OrganizationModel[]>([]);

  useEffect(() => {
    fetch("https://localhost:7034/api/organizations?page=1&pagesize=100", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((result) => {
        setOrganizations(result.data);
      });
  }, []);

  return (
    <div>
      <button
        type="button"
        onClick={() => {
          fetch(
            "https://localhost:7034/api/organizations?page=1&pagesize=100",
            {
              method: "GET",
            }
          )
            .then((response) => response.json())
            .then((result) => {
              setOrganizations(result.data);
            });
        }}
      >
        Refresh
      </button>
      <ul style={{ columns: 3, lineHeight: "0.5" }}>
        {organizations.map((organization) => (
          <li key={organization.id}>
            <h2 style={{ color: "blue", fontSize: "15px"}}>
              {organization.id} {organization.name}
            </h2>
            <p style={{fontSize: "10px" }}>{organization.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
