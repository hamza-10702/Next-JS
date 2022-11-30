import Users from "../components/users";

const AllUsers = (props) => {
  return (
    <div>
      <h1>All Users List</h1>

      <div>
        {props.users?.map((user) => {
          return (
            <div key={user.id}>
             <Users user = {user}/>
            </div>
          );
        })}
      </div> 
    </div>
  );
};

export default AllUsers;

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  return {
    props: {
      users: data,
    },
  };
}
