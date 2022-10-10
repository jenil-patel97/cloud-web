import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full my-32">
      <div className="max-w-[1240px] mx-auto">
        <div className="text-center cursor-default">
          <h2 className="text-5xl font-bold">
            Trusted by developers across the world.
          </h2>
          <p className="text-3xl py-6 text-gray-500">
            Let’s start building your tomorrow, today.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 px-2 cursor-default text-center text-blue-500">
          <div className="border py-8 rounded-xl shadow-xl">
            <p className="text-6xl font-bold">100%</p>
            <p className="text-gray-600 mt-2 text-lg">Completion</p>
          </div>
          <div className="border py-8 rounded-xl shadow-xl">
            <p className="text-6xl font-bold">24/7</p>
            <p className="text-gray-600 mt-2 text-lg">Delivery</p>
          </div>
          <div className="border py-8 rounded-xl shadow-xl">
            <p className="text-6xl font-bold">100K</p>
            <p className="text-gray-600 mt-2 text-lg">Transactions</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
