import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './components/NavBar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';
import { SettingsProvider } from './context/SettingsProvider';
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { FoodsProvider } from './context/FoodProvider';

i18n
  .use(initReactI18next)
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      English: {
        translation: {
          "list": "List",
          "search": "Search for your recipe",
          "getInspired": "Get inspired",
          "groceryList": "Grocery list",
          "settings": "Settings",
          "language": "Language",
          "darkMode": "Dark mode",
          "imperialSystem": "Imperial system",
          "reportBug": "Report a bug",
          "exit": "Exit",
          "others": "Others",
          "preferences": "Preferences",

        }
      },
      Italian: {
        translation: {
          "list": "Lista",
          "search": "Cerca una ricetta",
          "getInspired": "Esplora",
          "groceryList": "Lista della spesa",
          "settings": "Impostazioni",
          "language": "Lingua",
          "darkMode": "Modalità scura",
          "imperialSystem": "Sistema imperiale",
          "reportBug": "Segnala un problema",
          "exit": "Esci dall'account",
          "others": "Altro",
          "preferences": "Preferenze",
  
        }
      }
    },
    

    fallbackLng: "English",
    
    lng: "English", // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    }
  });


export default function App() {


  return (
    <SafeAreaView  style={styles.container}>
      <SettingsProvider>
        <FoodsProvider>
          <NavigationContainer>
            <Navigation/>
          </NavigationContainer>
        </FoodsProvider>
      </SettingsProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'teal',
  },
});
