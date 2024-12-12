import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../../assets/image/assest";

function Feature() {
  return (
    <div className="bg-gray-800  text-white py-10">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-yellow-500">
          Tech Diary Features
        </h1>
        <p className="text-gray-400 mt-2">Explore the key features of Tech Diary</p>
      </div>

      <div className="grid gap-6 grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 container mx-auto px-6">
        <FeatureCard
          title="Bills History"
          description="Track and manage all your bills effortlessly."
          bgImage={assets.BillHistory}
          link="/bill-history"
        />
        <FeatureCard
          title="Payment Tracking"
          description="Stay updated with payment statuses and history."
          bgImage={assets.PaymentTracking}
          link="/payment-tracking"
        />
        <FeatureCard
          title="Add Machinery"
          description="Easily add and manage new machinery."
          bgImage={assets.AddMachinery}
          link="/add-machinery"
        />
        <FeatureCard
          title="Machine Maintenance"
          description="Schedule and track machinery maintenance."
          bgImage={assets.MachineMaintenance}
          link="/machine-maintenance"
        />
      </div>
    </div>
  );
}

function FeatureCard({ title, description, bgImage, link }) {
  return (
    <div
      className="relative bg-gray-700 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gray-900 bg-opacity-50"></div>
      <div className="relative p-6 flex flex-col h-full justify-between">
        <h3 className="text-xl font-bold text-yellow-500 mb-2">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
        <Link
          to={link}
          className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 self-start transition-colors duration-300"
        >
          Explore
        </Link>
      </div>
    </div>
  );
}

export default Feature;
