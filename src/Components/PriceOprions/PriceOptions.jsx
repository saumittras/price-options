import React from "react";
import PropTypes from "prop-types";
import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
  const priceOptions = [
    {
      id: 1,
      name: "Basic Membership",
      price: 29.99,
      features: [
        "Access to gym equipment",
        "Locker room access",
        "Group fitness classes",
        "Free Wi-Fi",
        "Monthly fitness workshops",
        "Access to outdoor training area",
      ],
    },
    {
      id: 2,
      name: "Standard Membership",
      price: 49.99,
      features: [
        "All Basic Membership features",
        "Unlimited access to all classes",
        "1 personal training session per month",
        "Access to sauna and steam room",
        "Nutrition workshops",
        "Discount on merchandise",
      ],
    },
    {
      id: 3,
      name: "Premium Membership",
      price: 79.99,
      features: [
        "All Standard Membership features",
        "Unlimited personal training sessions",
        "Nutrition consultation",
        "Free guest passes (2 per month)",
        "Priority booking for classes",
        "Exclusive member events",
      ],
    },
    {
      id: 4,
      name: "Student Membership",
      price: 19.99,
      features: [
        "Access to gym equipment",
        "Locker room access",
        "Discounted group fitness classes",
        "Free Wi-Fi",
        "Valid with student ID",
        "Access to study area",
      ],
    },
    {
      id: 5,
      name: "Family Membership",
      price: 99.99,
      features: [
        "All Premium Membership features for up to 4 family members",
        "Family group fitness classes",
        "Monthly family wellness workshops",
        "Kids' fitness programs",
        "Access to family lounge area",
        "Family-oriented events and activities",
      ],
    },
  ];

  return (
    <div className="m-12">
      <h2 className="text-5xl">Best prices in the town</h2>

      <div className="grid grid-cols-3 gap-6">
        {priceOptions.map((Option) => (
          <PriceOption option={Option} key={Option.id}></PriceOption>
        ))}
      </div>
    </div>
  );
};

PriceOptions.propTypes = {
  option: PropTypes.object,
};
export default PriceOptions;
