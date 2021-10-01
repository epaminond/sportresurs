import { createContext, useState } from "react";

const Context = createContext("");

const ContextProvider = ({ children }) => {
  const [coordinates, setCoordinates] = useState(null);
  const [filterData, setFilterData] = useState({
    purposeOfAreas: [],
    districts: [],
  });

  const handleCoordinates = (value) => {
    setCoordinates(value);
  };
  const handlePurposeOfAreas = (e) => {
    setFilterData((prevState) => ({
      ...prevState,
      purposeOfAreas: [e.target.textContent],
    }));
  };

  const handleDistricts = (e) => {
    setFilterData((prevState) => ({
      ...prevState,
      districts: [e.target.textContent],
    }));
  };
  return (
    <Context.Provider
      value={{
        coordinates,
        filterData,
        handleCoordinates,
        handlePurposeOfAreas,
        handleDistricts,
        setFilterData,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { Context, ContextProvider };
