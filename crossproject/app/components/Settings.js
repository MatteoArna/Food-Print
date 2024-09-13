import React, { useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  Switch,
} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import ModalDropdown from 'react-native-modal-dropdown';
import { useSettings } from '../context/SettingsProvider';
import { useTranslation } from 'react-i18next';


export default function Settings() {

  const {t, i18n} = useTranslation();

  const {settings, setSetting} = useSettings();

  function changeLanguage(val){
    console.log(val);
    setSetting('language', val);
    i18n.changeLanguage(val);

  }

  const languages = [
    'English',
    'Italian',
  ];

  const [form, setForm] = useState({
    language: 'English',
    darkMode: true,
    imperialSystem: false,
  });


  return (
    <SafeAreaView style={{ backgroundColor: 'teal', flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>{t('settings')}</Text>
 
        </View>

        <View style={styles.profile}>
          <Image
            alt=""
            source={{
              uri: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80',
            }}
            style={styles.profileAvatar}
          />

          <Text style={styles.profileName}>John Doe</Text>

          <Text style={styles.profileEmail}>john.doe@mail.com</Text>

        </View>

          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionHeaderText}>{t('preferences')}</Text>
            </View>
            <View style={styles.sectionBody}>
                  

                  <View
                    style={[
                      styles.rowWrapper,
                    ]}>
                    <View style={styles.row}>
                      <FeatherIcon
                        color="#616161"
                        style={styles.rowIcon}
                        size={22}
                      />

                      <Text style={styles.rowLabel}>{t('darkMode')}</Text>

                      <View style={styles.rowSpacer} />

                        <SafeAreaView>
                          <Switch
                              onValueChange={() => { setSetting('darkMode', !settings.darkMode) }}
                              value={settings.darkMode}
                            />
                        </SafeAreaView>

                    </View>
                  </View>

                  <View
                    style={[
                      styles.rowWrapper,
                    ]}>
                    <View style={styles.row}>
                      <FeatherIcon
                        color="#616161"
                        style={styles.rowIcon}
                        size={22}
                      />

                      <Text style={styles.rowLabel}>{t('imperialSystem')}</Text>

                      <View style={styles.rowSpacer} />

                        <SafeAreaView>
                          <Switch
                              onValueChange={() => {setSetting('imperialSystem', !settings.imperialSystem)}}
                              value={settings.imperialSystem}
                            />
                        </SafeAreaView>

                    </View>
                  </View>

                  <View
                    style={[
                      styles.rowWrapper,
                    ]}>
                    <View style={styles.row}>
                      <FeatherIcon
                        color="#616161"
                        style={styles.rowIcon}
                        size={22}
                      />

                      <Text style={styles.rowLabel}>{t('language')}</Text>

                      <View style={styles.rowSpacer} />


                      <ModalDropdown
                        options={['English', 'Italian']}
                        defaultValue={settings.language}
                        onSelect={(index, val) => {changeLanguage(val)}}
                        animated={true}
                        dropdownStyle={styles.dropdown}
                        dropdownTextStyle={styles.dropdownText}
                        textStyle={styles.dropdownText}
                        style={styles.dropdown}

                      />
                      
                  </View>

                  </View>
            </View>
          </View>



          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionHeaderText}>{t('others')}</Text>
            </View>
            <View style={styles.sectionBody}>
                  <View
                    style={[
                      styles.rowWrapper,
                    ]}>
                    <View style={styles.row}>
                      <FeatherIcon
                        color="#616161"
                        style={styles.rowIcon}
                        size={22}
                      />

                      <Text style={styles.rowLabel}>{t('reportBug')}</Text>
                    </View>
                  </View>

                  <View
                    style={[
                      styles.rowWrapper,
                    ]}>
                    <View style={styles.row}>
                      <FeatherIcon
                        color="#616161"
                        style={styles.rowIcon}
                        size={22}
                      />

                      <TouchableOpacity>
                        <Text style={styles.exit}>{t('exit')}</Text>
                      </TouchableOpacity>
                    </View>
                  </View>

            </View>
          </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
  },
  section: {
    paddingTop: 50,
    marginLeft: 10,
    marginRight: 10,

  },
  sectionHeader: {
    
    paddingHorizontal: 24,
    paddingVertical: 8,

},
  sectionHeaderText: {
    fontSize: 14,
    fontWeight: '600',
    color: 'white',
    textTransform: 'uppercase',
    letterSpacing: 1.2,
  },
  sectionBody: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#e3e3e3',
    backgroundColor: '#e3e3e3',
    borderRadius: 12,
  },
  header: {
    paddingLeft: 24,
    paddingRight: 24,
    marginBottom: 12,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: 'white',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 15,
    fontWeight: '500',
    color: '#929292',
  },
  profile: {
    marginLeft: 10,
    marginRight: 10,
    padding: 16,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#e3e3e3',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#e3e3e3',
    borderRadius: 12
  },
  profileAvatar: {
    width: 60,
    height: 60,
    borderRadius: 9999,
  },
  profileName: {
    marginTop: 12,
    fontSize: 20,
    fontWeight: '600',
    color: '#090909',
  },
  profileEmail: {
    marginTop: 6,
    fontSize: 16,
    fontWeight: '400',
    color: '#848484',
  },
  profileAction: {
    marginTop: 12,
    paddingVertical: 10,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#007bff',
    borderRadius: 12,
  },
  profileActionText: {
    marginRight: 8,
    fontSize: 15,
    fontWeight: '600',
    color: '#fff',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingRight: 24,
    height: 50,
  },
  rowWrapper: {
    paddingLeft: 24,
    borderTopWidth: 1,
    borderColor: 'transparent',
  },
  rowIcon: {
    marginRight: 12,
  },
  rowLabel: {
    fontSize: 17,
    fontWeight: '500',
    color: '#000',
  },
  exit: {
    fontSize: 17,
    fontWeight: '500',
    color: 'red',
  },
  rowValue: {
    fontSize: 17,
    color: '#616161',
    marginRight: 4,
  },
  rowSpacer: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  textStyle: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  languages: {
    flex: 1,
    borderColor: 'black',
  },
  dropdown: {
    width: 150,
    borderWidth: 1,
    borderColor: 'lightgray',
    padding: 5,
    borderRadius: 5,
  },
  dropdownText: {
    fontSize: 18,
  },
  dropdownDropdown: {
    width: 150,
    height: 200,
    borderColor: 'gray',
    borderRadius: 5,
    borderWidth: 1,
  },
  dropdownDropdownText: {
    fontSize: 18,
  },
});