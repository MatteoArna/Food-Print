import { createContext, useContext, useState } from "react";

const FoodsContext = createContext(null);

function useFoods() {
  const context = useContext(FoodsContext);
  if (context === null) {
    throw new Error("useFoods must be used within a FoodsProvider");
  }

  return context;
}

function FoodsProvider({ children }) {
  let [foods, setFoods] = useState(
    []
  );

  return (
    <FoodsContext.Provider
      value={{
        foods,
        setFoods,
      }}
    >
      {children}
    </FoodsContext.Provider>
  );
}

export { FoodsProvider, useFoods };