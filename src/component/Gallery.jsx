import React, { useState } from "react";
import img from "./assets/Frame.png";
import img3 from "./assets/go.png";
import img4 from "./assets/back.png";
import img2 from "./assets/Rectangle.png";
const Gallery = () => {
  const [images, setImages] = useState([img2, img2, img2]);

  const handleAddImage = (event) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const newImages = Array.from(files).map((file) =>
        URL.createObjectURL(file)
      );
      setImages([...images, ...newImages]);
    }
  };

  return (
    <div className="relative w-full mt-8 bg-neutral-700 p-10">
      <div className="absolute left-2">
        <img src={img} alt="Frame" />
      </div>
      <div className="flex justify-between items-center">
        <h2 className="text-white bg-black pr-10 pl-10 p-3 rounded-lg">
          Gallery
        </h2>

        <div className="flex items-center space-x">
          <input
            type="file"
            multiple
            accept="image/*"
            className="hidden"
            id="fileInput"
            onChange={handleAddImage}
          />
          <label
            htmlFor="fileInput"
            className="bg-neutral-600 text-white h-12 p-2 pr-5 pl-5 rounded-full cursor-pointer"
          >
            + Add Image
          </label>

          <img src={img3} className="h-20 w-20" alt="Go" />
          <img src={img4} className="h-20 w-20" alt="Back" />
        </div>
      </div>
      <div className="flex mt-4">
        <div className="flex space-x-4 overflow-x-scroll">
          {images.length > 0 ? (
            images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`User Image ${index + 1}`}
                className="w-50 h-40 object-cover"
              />
            ))
          ) : (
            <p className="text-white">No images uploaded yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
