"use client";
import { createContext, useState, useContext } from "react";

const videoContext = createContext();
export const useVideoContext = () => {
  return useContext(videoContext);
};

export const VideoProvider = ({ children }) => {
  const [currentVideo, setCurrentVideo] = useState(0);

  return (
    <videoContext.Provider value={{ currentVideo, setCurrentVideo }}>
      {children}
    </videoContext.Provider>
  );
};
