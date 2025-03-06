import { OrganizationCreate } from "../components/OrganizationCreate";
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
      <div>
        <OrganizationListView />
      </div>
      <hr />
      <div>
        <OrganizationCreate />
      </div>
      <hr />
      <div>
        <OrganizationEdit />
      </div>
    </div>
  );
};
