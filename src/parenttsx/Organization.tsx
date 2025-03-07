import { OrganizationCreate } from "../components/OrganizationCreate";
import { OrganizationDelete } from "../components/OrganizationDelete";
import { OrganizationEdit } from "../components/OrganizationEdit";
import { OrganizationListView } from "../components/OrganizationListView";

export interface OrganizationModel {
  id: number;
  name: string;
  description: string;
}

export const Organization = () => {
  return (
    <div>
      <h1>Organization</h1>
      <div style = {{margin: "10px 0px", border: "3px solid", padding: "10px"}}>
        <OrganizationListView />
      </div>
      
      <div style = {{margin: "10px 0px", border: "3px solid", padding: "10px", display: "flex", justifyContent: "space-between"}}>
        <OrganizationCreate />
        <OrganizationEdit />
        <OrganizationDelete />
      </div>
    </div>
  );
};
