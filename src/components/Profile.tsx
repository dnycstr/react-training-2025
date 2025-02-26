interface ProfileProps {
  firstname: string;
  lastname: string;
  email: string;
  age: number;
}

/***
 * 
   <Profile
        firstname="John"
        lastname="Doe"
        email="john.doe@yahoo.com"
        age={25}
      />
 * 
 ***/

export const Profile: React.FC<ProfileProps> = ({
  firstname,
  lastname,
  email,
  age,
}) => {
  return (
    <div className="profile-container">
      <div>
        Fullname: {firstname} {lastname}
      </div>
      <div> Contact Me at: {email}</div>
      <div> I am: {age} years old</div>
    </div>
  );
};
