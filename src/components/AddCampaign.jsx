import React, { useContext } from "react";
import { authContex } from "../routes/AuthProvider";
import Swal from "sweetalert2";

const AddCampaign = () => {
  const { user } = useContext(authContex);

  const displayName = user.displayName;
  const email = user.email;

  const AddACampaign = (e) => {
    e.preventDefault();
    const form = e.target;
    const photo = form.photo.value;
    const deadline = form.deadline.value;
    const amount = form.amount.value;
    const title = form.title.value;
    const campaign = form.campaign.value;
    const description = form.description.value;

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
                title: "Successfully Added A Campaign",
                showConfirmButton: false,
                timer: 1500,
              });
              e.target.reset();
        }
      });

    // console.log(photo,deadline,campaign,description);
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content w-full flex-col ">
        <div className="card bg-base-100 w-full max-w-4xl mx-auto shrink-0 shadow-2xl">
          <h1 className="text-3xl text-center mt-10 font-bold">Add Campaign</h1>
          <form onSubmit={AddACampaign} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">User Name</span>
              </label>
              <input
                name="name"
                type="text"
                value={displayName}
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
                value={email}
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
                placeholder="Title"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Campaign type</span>
              </label>
              <select name="campaign" required className="select select-bordered w-full">
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
                className="border p-2"
                placeholder="Write here description"
                id=""
                cols="30"
                rows="7"
                required
              ></textarea>
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-primary">Add Campaign</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCampaign;
