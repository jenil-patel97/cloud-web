import React from "react";

import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaTwitch,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full mt-24 bg-slate-900 text-gray-300 py-y px-2">
      <div className="max-w-[1240px] cursor-default mx-auto grid grid-cols-2 md:grid-cols-5 border-b-2 border-gray-600 py-8">
        <div className="ml-5">
          <h6 className="font-bold uppercase pt-2 underline">Solutions</h6>
          <ul className="mt-2">
            <li className="py-1">Marketing</li>
            <li className="py-1">Analytics</li>
            <li className="py-1">Commerce</li>
            <li className="py-1">Data</li>
            <li className="py-1">Cloud</li>
          </ul>
        </div>
        <div className="ml-5">
          <h6 className="font-bold uppercase pt-2 underline">Support</h6>
          <ul className="mt-2">
            <li className="py-1">Pricing</li>
            <li className="py-1">Documentation</li>
            <li className="py-1">Guides</li>
            <li className="py-1">API Status</li>
          </ul>
        </div>
        <div className="ml-5">
          <h6 className="font-bold uppercase pt-2 underline">Company</h6>
          <ul className="mt-2">
            <li className="py-1">About</li>
            <li className="py-1">Blog</li>
            <li className="py-1">Jobs</li>
            <li className="py-1">Press</li>
            <li className="py-1">Partners</li>
          </ul>
        </div>
        <div className="col-span-2 pt-8 md:pt-2 ml-5">
          <p className="font-bold uppercase hover:underline">
            Subscribe to our newsletter
          </p>
          <p className="py-4">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
          <form className="flex flex-col sm:flex-row">
            <input
              className="w-full p-2 mr-4 rounded-md mb-4"
              type="email"
              placeholder="Enter Your email"
            />
            <button className="p-2 mb-4 hover:text-white hover:bg-blue-600">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center">
        <p className="py-4 cursor-default text-white">
          © Copyright 2022. All rights reserved
        </p>
        <div className="flex justify-between sm:w-[300px] pt-4 text-2xl cursor-pointer text-white">
          <FaFacebook />
          <FaInstagram />
          <FaTwitter />
          <FaTwitch />
          <FaGithub />
        </div>
      </div>
    </div>
  );
};

export default Footer;
