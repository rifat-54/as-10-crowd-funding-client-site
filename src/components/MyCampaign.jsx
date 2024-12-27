import React, { useContext, useEffect, useState } from "react";
import { authContex } from "../routes/AuthProvider";

import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MyCampaign = () => {
  const { user } = useContext(authContex);
  const email = user.email;

  const [data, setData] = useState([]);

  const hodaiReload=()=>{}

  useEffect(() => {
    fetch(`https://crowd-funding-server-ten.vercel.app/mycampaigns/${email}`)
      .then((res) => res.json())
      .then((result) => {
        setData(result);
      });
  }, [hodaiReload]);


  const handleDelete=(id)=>{

    Swal.fire({
        title: "Are you sure?",
        text: "Do You Want To DELETE!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
            fetch(`https://crowd-funding-server-ten.vercel.app/mycampaigns/${id}`,{
                method:'DELETE'
            })
            .then(res=>res.json())
            .then(result=>{
                
                if(result.deletedCount){
                    hodaiReload()
                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: "Successfully Deleted",
                        showConfirmButton: false,
                        timer: 1500,
                      });
        
                }
            })
          
        }
      });

   

  }

  return (
    <div className="px-4 lg:w-11/12 mb-14 mx-auto">
        <p className="text-3xl font-bold my-12 text-center">My Campaign</p>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Serial</th>
              <th>Name</th>
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
                <td>{user?.title}</td>
                <td>{user?.campaign}</td>
                <td>{user?.amount}</td>
                <td>
                    <div className="flex flex-wrap">
                        <Link to={`/updatecampaign/${user._id}`} className="btn mr-3 text-white bg-[#15B392]">Update</Link>
                        <button onClick={()=>handleDelete(user._id)} className="btn bg-red-400 text-white">X</button>
                    </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCampaign;
