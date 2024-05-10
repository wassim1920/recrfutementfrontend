import React from "react";

const Experience = () => {
  return (
    <div>
      <h1>Basic Information</h1>
      <div className="flex gap-5 p-8 justify-between p-9">
        <div className="flex flex-col">
          <span>AGE</span>
          <span style={{ fontFamily: "sans-serif", color: "blue" }}>
            28 YEAR
          </span>
          <span>AGE</span>
          <span style={{ fontFamily: "sans-serif", color: "blue" }}>
            28 YEAR
          </span>
          <span>AGE</span>
          <span style={{ fontFamily: "sans-serif", color: "blue" }}>
            28 YEAR
          </span>
        </div>
        <div className="flex flex-col">
          <span>AGE</span>
          <span style={{ fontFamily: "sans-serif", color: "blue" }}>
            28 YEAR
          </span>
          <span>AGE</span>
          <span style={{ fontFamily: "sans-serif", color: "blue" }}>
            {" "}
            28 YEAR
          </span>
          <span>AGE</span>
          <span style={{ fontFamily: "sans-serif", color: "blue" }}>
            28 YEAR
          </span>
        </div>
        <div className="flex flex-col">
          {" "}
          <span>AGE</span>
          <span>28 YEAR</span>
          <span>AGE</span>
          <span>28 YEAR</span>
          <span>AGE</span>
          <span>28 YEAR</span>
        </div>
      </div>
      <button className="mr-5 bg-gradient-to-r from-blue-500 to-green-500 hover:from-green-500 hover:to-blue-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md">
        Download Resume
      </button>
      <button className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-green-500 hover:to-blue-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md">
        Send Email
      </button>
    </div>
  );
};

export default Experience;
