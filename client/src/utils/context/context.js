import React, { useState, createContext } from "react";

// =========Bookings=========
export const BookedToursContext = createContext();

export const BookedToursProvider = props => {
  const [bookedTours, setBookedTours] = useState([]);

  return (
    <BookedToursContext.Provider value={[bookedTours, setBookedTours]}>
      {props.children}
    </BookedToursContext.Provider>
  );
};

// =========Store=========

export const PurchasesContext = createContext();

export const PurchasesProvider = props => {
  const [purchases, setPurchases] = useState([]);

  return (
    <PurchasesContext.Provider value={[purchases, setPurchases]}>
      {props.children}
    </PurchasesContext.Provider>
  );
};
