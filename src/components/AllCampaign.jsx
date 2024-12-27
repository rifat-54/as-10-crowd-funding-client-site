import React, { useContext, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Cards from "./Cards";

const AllCampaign = () => {
  const loadedData = useLoaderData();

  const [data,setData]=useState(loadedData)

  const handleSort=()=>{

    const sortedData=[...data].sort((a,b)=>b.amount-a.amount)
    setData(sortedData)

  }
  return (
    <div className="lg:px-5">
      <div className="w-11/12 mt-24 mb-14 mx-auto text-center">
        <h2 className="lg:text-3xl">All Campaign</h2>
        <p className="lg:w-9/12 mx-auto mt-5">
          Explore inspiring campaigns that need your support. Together, we can
          turn dreams into reality—one contribution at a time!
        </p>
        <div className="flex justify-end mt-10">

        <button onClick={handleSort} className="btn bg-[#D2FF72] text-right">Sort By Amount</button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Serial</th>
              <th>Name</th>
              <th>Email</th>
              <th>Title</th>
              <th>Campaign</th>
              <th>Amount</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {data.map((user, idx) => (
              <tr key={user._id}>
                <th>{idx + 1}</th>
                <td>{user?.displayName}</td>
                <td>{user?.email}</td>
                <td>{user?.title}</td>
                <td>{user?.campaign}</td>
                <td>{user?.amount}</td>
                <td>
                  <Link
                    state={user?._id}
                    to={`/details/${user?._id}`}
                    className="btn bg-[#15B392] text-white btn-primary"
                  >
                    Show More
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      
    </div>
  );
};

export default AllCampaign;
