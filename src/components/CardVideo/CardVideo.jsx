import React from "react";

const CardVideo = ({ src }) => {
  return (
    <iframe
      width="100%"
      height="100%"
      /* src={`${src}?controls=0&autoplay=1`} */
      src="https://youtu.be/NZNHs7gyANA"
      title="YouTube video player"
      frameBorder="0"
      allowFullScreen
      allow="accelerometer; autoplay; modestbranding; encrypted-media; gyroscope; picture-in-picture"
    />
  );
};

export default CardVideo;
