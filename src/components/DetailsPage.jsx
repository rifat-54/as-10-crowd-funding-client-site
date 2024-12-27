import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { authContex } from "../routes/AuthProvider";

const DetailsPage = () => {

  const data = useLoaderData();
//   console.log(data);
  const { user } = useContext(authContex);
  const email = user.email;
  const displayName = user.displayName;
  const {
    deadline,
    description,
    title,
    photo,
    campaign,
    amount,
    _id,
    
    
  } = data;

  const currentDate = new Date().toDateString().split(" ")[2];
  const currentDateOnly = parseInt(currentDate);
  const handleDonate = () => {
    if(currentDateOnly> parseInt(deadline.split("-")[2])){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Deadline is Over!",
            
          });
          return ;
    }

    const campaignData = {
      displayName,
      email,
      photo,
      deadline,
      amount,
      title,
      campaign,
      description,
    };

    fetch("https://crowd-funding-server-ten.vercel.app/addcampaign", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(campaignData),
    })
      .then((res) => res.json())
      .then((result) => {
        // console.log(result);
        if (result.insertedId) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Successfully Donated",
            showConfirmButton: false,
            timer: 1500,
          });
         
        }
      });
  };

  return (
    <div>
      <h2 className="text-3xl font-bold text-center my-20">See All Details</h2>
      <div className="card w-11/12 mx-auto bg-base-100  shadow-xl">
        <figure>
          <img
            className="w-11/12 md:w-7/12 lg:w-1/2 mx-auto rounded-lg h-[250px]"
            src={photo}
            alt="Photo"
          />
        </figure>
        <div className="card-body">
          <h2 className="text-xl mt-2 mb-10 font-bold">Campaign: {campaign}</h2>
          <h2 className="card-title">{title}</h2>
          <p className="text-gray-500 my-3">{description}</p>
          <p>Name:{displayName}</p>
          <p>Email:{email}</p>
          <p className="font-semibold">Amount: ${amount}</p>
          <p className="text-red-500 font-semibold">DeadLine: {deadline}</p>
          <div className="card-actions my-6 justify-center">
            <button
              onClick={handleDonate}
              className="btn bg-[#15B392] text-white btn-primary"
            >
              Donate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
