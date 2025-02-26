import { Profile } from "../components/Profile";

export const SampleDataProps: React.FC = () => {
  return (
    <div>
      <Profile
        firstname="John"
        lastname="Doe"
        email="john.doe@yahoo.com"
        age={25}
      />
    </div>
  );
};
