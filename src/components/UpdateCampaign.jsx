import React, { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { authContex } from "../routes/AuthProvider";
import Swal from "sweetalert2";

const UpdateCampaign = () => {
  const data = useLoaderData();
  const { user } = useContext(authContex);

 const navigate=useNavigate()

  const displayName = user?.displayName;
  const email = user?.email;
  const updateCampaign = (e) => {
    e.preventDefault();
    const form = e.target;
    const photo = form.photo.value;
    const deadline = form.deadline.value;
    const amount = form.amount.value;
    const title = form.title.value;
    const campaign = form.campaign.value;
    const description = form.description.value;

    const updatedData = {
      displayName,
      email,
      photo,
      deadline,
      amount,
      title,
      campaign,
      description,
    };

    fetch(`https://crowd-funding-server-ten.vercel.app/updatecampaigndata/${data._id}`,{
        method:'PUT',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(updatedData)
    })
    .then(res=>res.json())
    .then(result=>{
        // console.log(result);
        if(result.modifiedCount){
            Swal.fire({
                position: "top-center",
                icon: "success",
                title: "Successfully Updated",
                showConfirmButton: false,
                timer: 1500,
              });
              navigate('/mycampaign')

        }
    })

    // console.log(updatedData);
  };


  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content w-full flex-col ">
        <div className="card bg-base-100 w-full max-w-4xl mx-auto shrink-0 shadow-2xl">
          <h1 className="text-3xl text-center mt-10 font-bold">
            Update Campaign
          </h1>
          <form onSubmit={updateCampaign} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">User Name</span>
              </label>
              <input
                name="name"
                type="text"
                value={data?.displayName}
                placeholder="User Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                value={data?.email}
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                name="photo"
                type="text"
                defaultValue={data?.photo}
                placeholder="Photo Url"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Title</span>
              </label>
              <input
                name="title"
                type="text"
                defaultValue={data?.title}
                placeholder="Title"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Campaign type</span>
              </label>
              <select
                name="campaign"
                defaultValue={data?.campaign}
                className="select select-bordered w-full"
              >
                <option disabled selected>
                  Campaign type
                </option>
                <option>Personal issue</option>
                <option>Startup</option>
                <option>Business</option>
                <option>Creative ideas</option>
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Donation amount</span>
              </label>
              <input
                name="amount"
                type="number"
                defaultValue={data?.amount}
                placeholder="donation amount"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Deadline</span>
              </label>
              <input
                name="deadline"
                type="date"
                defaultValue={data?.deadline}
                placeholder="Deadline"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <textarea
                name="description"
                defaultValue={data.description}
                className="border p-2"
                placeholder="Write here description"
                id=""
                cols="30"
                rows="7"
              ></textarea>
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-primary">Update Campaign</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateCampaign;
