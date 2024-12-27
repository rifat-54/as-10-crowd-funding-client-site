import React, { useContext, useEffect, useState } from "react";
import { authContex } from "../routes/AuthProvider";
import Cards from "./Cards";

const MyDonation = () => {
  const { user } = useContext(authContex);
  const email = user.email;
  

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://crowd-funding-server-ten.vercel.app/mycampaigns/${email}`)
      .then((res) => res.json())
      .then((result) => {
        setData(result);
      });
  }, []);

  return (
    <div>
      <h2 className="text-3xl font-bold text-center my-20">My Donation</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-20 w-11/12 gap-4 lg:gap-8 mx-auto">
        {data.map((user) => (
          <Cards key={user._id} user={user}></Cards>
        ))}
      </div>
    </div>
  );
};

export default MyDonation;
