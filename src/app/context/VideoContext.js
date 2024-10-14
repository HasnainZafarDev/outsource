"use client";
import { createContext, useState, useContext } from "react";

const VideoContext = createContext();
export const useVideoContext = () => {
  return useContext(VideoContext);
};

export const VideoProvider = ({ children }) => {
  const [currentVideo, setCurrentVideo] = useState(0);

  return (
    <VideoContext.Provider value={{ currentVideo, setCurrentVideo }}>
      {children}
    </VideoContext.Provider>
  );
};
