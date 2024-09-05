import { useState } from "react";
import "./Tab.css"; // Import custom CSS for animation
import img from "./assets/Frame.png";
const Tabs = () => {
  const [activeTab, setActiveTab] = useState("About Me");

  return (
    <div className="relative w-full bg-neutral-700 p-10 rounded-lg">
      <div className="absolute left-2">
        <img src={img} alt="" />
      </div>
      <div className="flex justify-between relative bg-black rounded-lg p-2">
        {["About Me", "Experiences", "Recommended"].map((tab, index) => (
          <button
            key={tab}
            className={`px-6 py-2 relative z-10 text-white ${
              activeTab === tab ? "font-semibold" : "font-normal"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
        <div
          className={`absolute left-0 top-0 h-12 w-1/3 bg-neutral-800 transition-transform duration-300 rounded-lg m-1`}
          style={{
            transform: `translateX(${
              ["About Me", "Experiences", "Recommended"].indexOf(activeTab) *
              100
            }%)`,
          }}
        ></div>
      </div>
      <div className="p-4 text-neutral-400 mt-4">
        {activeTab === "About Me" && (
          <p>
            this is about me section, <br /> Hello! I’m Dave, your sales rep
            here from Salesforce. I’ve been working at this awesome company for
            3 years now. I was born and raised in Albany, NY& have been living
            in Santa Carla for the past 10 years my wife Tiffany and my 4 year
            old twin daughters- Emma and Ella. Both of them are just starting
            school, so my calender is usually blocked between 9-10 AM. This is
            a...
          </p>
        )}
        {activeTab === "Experiences" && (
          <p>
            this is experience section,
            <br /> Hello! I’m Dave, your sales rep here from Salesforce. I’ve
            been working at this awesome company for 3 years now. I was born and
            raised in Albany, NY& have been living in Santa Carla for the past
            10 years my wife Tiffany and my 4 year old twin daughters- Emma and
            Ella. Both of them are just starting school, so my calender is
            usually blocked between 9-10 AM. This is a...
          </p>
        )}
        {activeTab === "Recommended" && (
          <p>
            this is Recommended section,
            <br /> Hello! I’m Dave, your sales rep here from Salesforce. I’ve
            been working at this awesome company for 3 years now. I was born and
            raised in Albany, NY& have been living in Santa Carla for the past
            10 years my wife Tiffany and my 4 year old twin daughters- Emma and
            Ella. Both of them are just starting school, so my calender is
            usually blocked between 9-10 AM. This is a...
          </p>
        )}
      </div>
    </div>
  );
};

export default Tabs;
