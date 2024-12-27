import React from "react";
import bannerImg from "../assets/Glossary-Series-Brand-_-Crowd-Funding-ftr.png";

const ExtraSection = () => {
  return (
    <div className="mt-20">
      <div>
        <h2 className="text-3xl my-14 font-bold text-center">
          What is crowdfunding?
        </h2>
        <div className="text-xl text-gray-500 space-y-10 w-11/12 lg:w-10/12 mx-auto">
          <p>
            Crowdfunding is a way to raise funds for a specific cause or project
            by asking a large number of people to donate money, usually in small
            amounts, and usually during a relatively short period of time, such
            as a few months. Crowdfunding is done online, often with social
            networks, which make it easy for supporters to share a cause or
            project cause with their social networks.
          </p>
          <p>
            Organizations, businesses, and individuals alike can use
            crowdfunding for any type of project, for example: charitable cause;
            creative project; business startup; school tuition; or personal
            expenses.
          </p>
          <h2>There are 2 main models or types of crowdfunding:</h2>
        </div>
      </div>
      <div className="my-14">
        <img className="w-11/12 mx-auto" src={bannerImg} alt="" />
      </div>
      <div className="text-xl text-gray-500 space-y-10 w-11/12 lg:w-10/12 mx-auto">
        <p>
          Donation-based funding, where donors contribute to a total amount for
          a new project. Often promised return is the product or service that
          will be developed with the revenue brought in by the crowdfunding
          campaign. For charitable projects whose ultimate beneficiary is not
          the donor, there may be some other perk or reward for funders.
          Investment crowdfunding, where businesses seeking capital sell
          ownership stakes online in the form of equity or debt. In this model,
          individuals who fund become owners or shareholders and have a
          potential for financial return, unlike in the donation model. This
          became possible when Title II of the JOBS Act went into effect in
          September 2013 for accredited investors. Nonprofits generally cannot
          utilize equity markets.
        </p>
      </div>
      <div className="mt-32 mb-20 py-20 px-6 md:px-14 lg:px-20 bg-[#FEBE10] md:flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold">Sign up for our newsletter</h2>
        </div>
        <div className="flex justify-start lg:mr-72">
            <div>
            <p className="my-4">Enter your email address*</p>
          <div className="join">
            
            <input
              className="input input-bordered join-item"
              placeholder="Email"
            />
            <button className="btn join-item rounded-r-full">Subscribe</button>
          </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ExtraSection;
