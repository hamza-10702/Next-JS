import { useEffect, useState } from "react";
import useSWR from "swr";

const fatcher = async () => {
  const response = await fetch(`http://localhost:4000/dashboard`);
  const data = await response.json();
  return data;
};

function DashboardSWR() {


  const { data, error } = useSWR("dashboard", fatcher);

  if (!data) return <h6>No Data Found</h6>;
  if (error) return <h6>Something went wrong</h6>;

  return (
    <div> 
        <h3>SWR is use for real time data fetch </h3>
      <h2>SWR Dashboard</h2>
      <h2>Posts - {data.posts}</h2>
      <h2>Likes - {data.likes}</h2>
      <h2>Followers - {data.followers}</h2>
      <h2>Following - {data.following}</h2>
    </div>
  );
}

export default DashboardSWR;
