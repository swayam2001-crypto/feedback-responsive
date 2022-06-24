import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody, Row, Col } from "reactstrap";
import { FaStar } from "react-icons/fa";
import Rate from "./Rate";

const Feedback = ({ setModalOn }) => {
  const handleXClick = () => {
    setModalOn(false);
  };

  const [rating, setRating] = useState(0);

  return (
    <div className=" h-full w-full bg-white-400 opacity-100 fixed inset-0 z-50">
      <div className="flex h-full w-full justify-center items-center ">
        <div className="flex-col w-[40rem] h-[40rem] bg-white p-2 border-4 border-rose-700 rounded-xl ">
          <button
            className="text-right hover:outline-offset-2 hover:target:marker:bg-rose-900 focus:ring-2 focus:ring-rose-700 "
            onClick={handleXClick}
          >
            X
          </button>

          <div className="w-full text-white bg-[#560216] h-[3rem] my-2 p-1 text-3xl rounded-xl text-center">
            Feedback
          </div>

          <div className="text-center p-1 text-lg">
            Please rate our Services, it helps us serving you better.
          </div>
          <div className="col text-center text-2xl p-3">
            <Rate rating={rating} onRating={(rate) => setRating(rate)} />
          </div>

          <div className="w-full h-[3rem] my-2 p-1 text-white bg-[#560216] text-3xl rounded-xl text-center">
            Suggestions
          </div>

          <div className="text-center p-2 text-lg">
            We appreciate your suggestions, write your suggestions here.
          </div>

          <div className="flex flex-col p-1">
            <input
              className="placeholder: placeholder:text-slate-700 block bg-white w-full border border-slate-800 rounded-md shadow-md focus:outline-none hover:outline-offset-2 focus:border-[#560216] focus:ring-[#560216] focus:ring-1 sm:text-md"
              placeholder="Name"
              type="text"
              name="text"
            />
          </div>

          <div className="flex flex-col p-1">
            <input
              className="placeholder: placeholder:text-slate-700 block bg-white w-full border border-slate-800 rounded-md shadow-md focus:outline-none hover:outline-offset-2 focus:border-[#560216] focus:ring-[#560216] focus:ring-1 sm:text-md"
              placeholder="Email"
              type="email"
              name="email"
            />
          </div>

          <div className="flex flex-col p-1">
            <input
              className="placeholder: placeholder:text-slate-700 block bg-white w-full border border-slate-800 rounded-md shadow-md focus:outline-none hover:outline-offset-2 focus:border-[#560216] focus:ring-[#560216] focus:ring-1 sm:text-md"
              placeholder="Phone Number"
              type="number"
              name="number"
            />
          </div>

          <div className="flex flex-col p-1">
            <input
              className="placeholder: placeholder:text-slate-700 block bg-white w-full border border-slate-800 rounded-md shadow-md focus:outline-none hover:outline-offset-2 focus:border-[#560216] focus:ring-[#560216] focus:ring-1 sm:text-md"
              placeholder="Subject"
              type="text"
              name="text"
            />
          </div>

          <div className="flex flex-col p-1 py-3">
            <textarea
              rows="4"
              className=" pl-2 placeholder: placeholder:text-slate-600 block bg-white w-full border border-slate-500 rounded-sm shadow-md focus:outline-none hover:outline-offset-2 focus:border-[#560216] focus:ring-[#560216] focus:ring-1 sm:text-md"
              placeholder="Write Suggestions..."
              type="text"
              name="text"
            />
          </div>

          <div className="text-center p-1 text-lg">
            <button
              className="w-3/4 sm:w-1/2 py-2 text-center  text-white bg-[#560216] font-semibold rounded-md hover:bg-rose-800"
              onClick={handleXClick}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
