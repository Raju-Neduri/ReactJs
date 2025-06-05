import React from "react";
function MychannelVideos() {
  let videos = ["React Js", "JavaScript", "HTML", "CSS", "Node Js"];
  return (
    <>
      {videos.map((video, index) => {
        return (
          <li>
            {video} - {index}
          </li>
        );
      })}
    </>
  );
}

export default MychannelVideos;
