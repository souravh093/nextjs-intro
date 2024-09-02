import Image from "next/image";
import React from "react";
import nextImage from "../../assets/nextjs.png"

const GalleryPage = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center">Image Optimization</h1>
      <img
        src="https://www.felixvemmer.com/posts/why-next-js/twitter-card.png"
        alt="Logo"
        width="500"
        height="500"
        className="mx-auto"
      />
      <h1 className="text-4xl font-bold text-center">Next Image</h1>
      <Image
        // fill
        placeholder="blur"
        src={nextImage}
        alt="Logo"
        width={500}
        height={500}
        className="mx-auto"
      />
    </div>
  );
};

export default GalleryPage;
