import { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SettingsContext = createContext(null);

function useSettings() {
  const context = useContext(SettingsContext);
  if (context === null) {
    throw new Error("useSettings must be used within a SettingsProvider");
  }

  return context;
}

function SettingsProvider({ children }) {
  let [settings, setSettings] = useState({
    country: "Switzerland",
    darkMode: false,
    imperialSystem: false,
    language: "English",
  });

  const setSetting = (key, value) => {
    setSettings((prevSettings) => {
      const newSettings = { ...prevSettings, [key]: value };
      AsyncStorage.setItem("foodprint:settings", JSON.stringify(newSettings));
      return newSettings;
    });
  };

  useEffect(() => {
    async function load() {
   const settings = await AsyncStorage.getItem("foodprint:settings");
        if (settings) {
          setSettings(JSON.parse(settings));
        } 
      }

      load();
  }, []);

  return (
    <SettingsContext.Provider
      value={{
        settings,
        setSetting,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}

export { SettingsProvider, useSettings };