import React from "react";
import { Link } from "react-router-dom";

const Cards = ({ user }) => {
  const { deadline, description, title, photo, campaign, amount,_id } = user;
  return (
    <div className="card bg-base-100  shadow-xl">
  <figure>
    <img
    className="w-11/12 rounded-lg h-[220px]"
      src={photo}
      alt="Photo" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <h2 className="text-xl mt-2 font-bold">Campaign: {campaign}</h2>
    <p className="text-gray-500 my-3">{description?.slice(0,110)}</p>
    <p className="font-semibold">Amount: ${amount}</p>
    <p className="text-red-500 font-semibold">DeadLine:  {deadline}</p>
    <div className="card-actions my-6 justify-center">
      <Link state={_id} to={`/details/${_id}`} className="btn bg-[#15B392] text-white btn-primary">Show More</Link>
    </div>
  </div>
</div>
  );
};

export default Cards;
