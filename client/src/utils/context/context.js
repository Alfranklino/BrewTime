import React, { useState, createContext } from "react";

export const BookedToursContext = createContext();

export const BookedToursProvider = props => {
  const [bookedTours, setBookedTours] = useState([]);

  return (
    <BookedToursContext.Provider value={[bookedTours, setBookedTours]}>
      {props.children}
    </BookedToursContext.Provider>
  );
};
