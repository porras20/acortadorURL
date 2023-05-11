import React from "react";
import facebook from "../../public/icon-facebook.svg";
import twitter from "../../public/icon-twitter.svg";
import pinterest from "../../public/icon-pinterest.svg";
import instagram from "../../public/icon-instagram.svg";

export default function Footer() {
  return (
    <div className="bg-black flex justify-around text-white py-8">
      <div>
        <h2 className="text-4xl font-[Poppins] font-bold">Shortly</h2>
      </div>
      <div className="flex gap-5">
        <ul>
          <li className="mb-5 text-xl font-[Poppins] font-bold">Features</li>
          <div className="flex flex-col gap-3">
            <li>Link shortening</li>
            <li>Branded Links</li>
            <li>Analytics</li>
          </div>
        </ul>
        <ul>
          <li className="mb-5 text-xl font-[Poppins] font-bold">Resources</li>
          <div className="flex flex-col gap-3">
            <li>Blog</li>
            <li>Developers</li>
            <li>Support</li>
          </div>
        </ul>
        <ul>
          <li className="mb-5 text-xl font-[Poppins] font-bold">Company</li>
          <div className="flex flex-col gap-3">
            <li>About</li>
            <li>Our team</li>
            <li>Careers</li>
            <li>Contact</li>
          </div>
        </ul>
      </div>
      <div className="flex gap-3">
        <div>
          <img src={facebook} alt="" />
        </div>
        <div>
          <img src={twitter} alt="" />
        </div>
        <div>
          <img src={pinterest} alt="" />
        </div>
        <div>
          <img src={instagram} alt="" />
        </div>
      </div>
    </div>
  );
}
