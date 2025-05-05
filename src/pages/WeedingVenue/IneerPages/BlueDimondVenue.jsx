import React, { useState } from 'react';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { CiFlag1 } from "react-icons/ci";

import VenueNoida1 from "../../../assets/VenueNoida1.jpg";
import VenueNoida2 from "../../../assets/VenueNoida2.jpg";
import VenueNoida3 from "../../../assets/VenueNoida3.webp";

const BlueDimondVenue = () => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0); // track which image is clicked

  const images = [
    { src: VenueNoida1 },
    { src: VenueNoida2 },
    { src: VenueNoida3 },
  ];

  return (
    <div className="text-black p-4">
      <h2 className="text-2xl font-bold mb-4">Blue Dimond Venue</h2>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((img, i) => (
          <img
            key={i}
            src={img.src}
            alt={`Venue ${i + 1}`}
            className="w-full h-60 object-cover rounded-lg cursor-pointer shadow-md hover:opacity-90"
            onClick={() => {
              setIndex(i);
              setOpen(true);
            }}
          />
        ))}
      </div>

      {/* Lightbox */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={images}
        index={index}
      />

      <div className="flex mt-3">
        <div className="w-1/1 ">
          <div className="flex flex-wrap gap-2 p-3 font-semibold text-sm">
            <button className="rounded-lg p-2 shadow-sm shadow-gray-500 border-gray-700 w-10 sm:w-24 md:w-28 lg:w-24">About</button>
            <button className="rounded-lg p-1 shadow-sm shadow-gray-500 border-gray-700 w-10 sm:w-24 md:w-28 lg:w-24">FAQ</button>
            <button className="rounded-lg p-1 shadow-sm shadow-gray-500 border-gray-700 w-10 sm:w-24 md:w-28 lg:w-24">Reviews 7</button>
            <button className="rounded-lg p-1 shadow-sm shadow-gray-500 border-gray-700 w-10 sm:w-24 md:w-28 lg:w-24">Promotions 1</button>
            <button className="rounded-lg p-1 shadow-sm shadow-gray-500 border-gray-700 w-10 sm:w-24 md:w-28 lg:w-24">Map</button>
          </div>
          <hr className="border border-gray-900 mt-3 font-light" />

          {/* ABOUT */}

          <div className="mt-5">
            <h2>About</h2>
            <div className="flex flex-col sm:flex-row p-3 gap-1">
              <p className="flex items-center font-light gap-1 text-xl">
                <CiFlag1 /> On Weedingwire.in since 2024 .
              </p>
              <p className="font-light text-xl">Last update: November 2025</p>

            </div>
          </div>
          <div className="bg-gray-200 font-semibold p-4">
            <p className="text-md sm:text-lg md:text-xl">Blue Diamond, Perfect venue for every occasion</p>
          </div>

          <div className="mt-3 text-left p-4">
            <p className="font-semibold text-sm sm:text-base md:text-md leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident eos illum consequatur fuga pariatur nisi, sit aperiam magni iste illo aliquid, corrupti, accusantium necessitatibus facere maxime nihil rerum nostrum voluptatum?
              Et consectetur quaerat suscipit? Consequuntur debitis, voluptas aspernatur labore quaerat nisi repellendus! Obcaecati quasi labore quos repellendus voluptatem ipsam eveniet ex itaque vel eum. Voluptate quas iste saepe vero ipsum.
              Dicta praesentium ipsum est provident velit doloribus consequuntur sit deserunt natus neque possimus, ullam totam, aut, accusamus qui? Assumenda ipsa placeat non minima at, aspernatur tenetur natus unde corrupti dolorum.
              Totam vel non natus esse cupiditate, quibusdam aspernatur ipsa at necessitatibus laboriosam. Magnam error labore, ad sed reprehenderit consequuntur facere eos! Earum, harum? Veritatis, iste tenetur? Eaque nihil accusamus dolores.
              Illum incidunt accusantium quisquam nemo error quos cumque quas laudantium doloremque? Aperiam neque, veritatis est soluta, necessitatibus sapiente odio impedit dolore, quos minus atque optio ipsum. Ad voluptate cupiditate assumenda?
            </p>
          </div>
        </div>
        <div className="w-1/2  p-2 text-black">
          <p>Content for second div</p>

        </div>
      </div>

    </div>
  );
};

export default BlueDimondVenue;
