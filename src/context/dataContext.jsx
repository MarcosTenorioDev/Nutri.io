import React, { createContext, useState } from "react";

const DataContext = createContext();

const DataContextProvider = ({ children }) => {
    const [dietData, setDietData] = useState(null);

    const updateDietData = (data) => {
        setDietData(data);
        return data;
    }   


return(
    <DataContext.Provider value = {{dietData, updateDietData}}>
        {children}
    </DataContext.Provider>
    );
};

export {DataContext, DataContextProvider};