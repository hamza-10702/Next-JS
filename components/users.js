const Users = (props) => {
  return (
    <div>
      <h6>{props.user.name}</h6>
      <h6>{props.user.email}</h6>
    </div>
  );
};

export default Users;
