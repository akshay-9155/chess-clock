import React, { useId, useState } from "react";

const Start = ({ handleSubmit, formData, handleChange }) => {
    // console.log(formData);
    const id = useId();
  return (
    <div className=" px-10">
      <div className="w-full flex justify-center mb-20">
        <h1 className="text-7xl text-center tracking-tighter">
          Akshay Chess Clock
        </h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className=" flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label className="text-2xl" htmlFor="player1Name">
              Enter Name
            </label>
            <input
              className="text-2xl leading-none bg-red-100 opacity-80 rounded-lg pl-5 py-3 placeholder:uppercase"
              id={id+"player1Name"}
              name="player1Name"
              type="text"
              value={formData.player1Name}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-2xl" htmlFor="player2Name">
              Enter Name
            </label>
            <input
              className="text-2xl leading-none bg-red-100 opacity-80 rounded-lg pl-5 py-3 placeholder:uppercase"
              id={id+"player2Name"}
              name="player2Name"
              type="text"
              value={formData.player2Name}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-2xl" htmlFor="time">
              Time
            </label>
            <input
              className="text-2xl leading-none bg-red-100 opacity-80 rounded-lg pl-5 py-3 placeholder:uppercase"
              id={id+"time"}
              name="time"
              type="number"
              value={formData.time}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="start w-full flex items-center justify-center mt-10">
          <button className="uppercase flex items-center justify-center text-green-900 bg-gradient-to-tr from-sky-200 via-purple-200 to-green-300 text-5xl border-2 rounded-2xl py-4 px-8">
            Start
          </button>
        </div>
      </form>
    </div>
  );
};

export default Start;
