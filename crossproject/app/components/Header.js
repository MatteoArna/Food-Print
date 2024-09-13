import { Text, StyleSheet, View, Image, TouchableOpacity, Modal, SafeAreaView } from 'react-native'
import { ChevronDownIcon, CogIcon } from "react-native-heroicons/outline";
import Icon from 'react-native-vector-icons/AntDesign';
import React from 'react'
import { Swipeable } from 'react-native-gesture-handler';
import Settings from './Settings';
import ModalDropdown from 'react-native-modal-dropdown';
import { useSettings } from '../context/SettingsProvider';
import { useTranslation } from 'react-i18next';



export default function Header({ navigation }) {

  const {t} = useTranslation();

  const {settings, setSetting} = useSettings(); 

  const [modalVisible, setModalVisible] = React.useState(false);


  const flags = {
    'Switzerland': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Switzerland.svg/2048px-Flag_of_Switzerland.svg.png',
    'USA': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/2048px-Flag_of_the_United_States.svg.png',
  }

  const handleSwipeComplete = () => {
    setModalVisible(false);
  }

  return (
    <Swipeable onSwipeableClose={handleSwipeComplete} overshootRight={false}>
      <SafeAreaView style={styles.container}>
          
          
          <TouchableOpacity style={styles.country}>
          <View style={styles.textContainer}>

            <ModalDropdown 
              options={['USA', 'Switzerland']}
              animated={true}
              dropdownStyle={{width: 200, height: 100, backgroundColor: '#E5E7EB', borderRadius: 10, borderWidth: 1, borderColor: 'white'}}
              dropdownTextStyle={{color: 'black', fontSize: 20, backgroundColor: '#E5E7EB', fontWeight: 'bold', borderColor: 'transparent', borderRadius: 10, borderWidth: 1}}
              onSelect={(index, value) => setSetting("country", value)}

                      >
            <Image
              source={{
                uri: flags[settings.country]
              }}
              style={styles.image}
            />
              <Text style={styles.smallText}>{t('getInspired')}</Text>
              <Text style={styles.largeText}>{settings.country}
                <ChevronDownIcon size={20} color="teal" />
              </Text>

            </ModalDropdown>
            
          </View>
          </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
        >
          <CogIcon size={35} color="teal" />
        </TouchableOpacity>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
          onSwipeComplete={handleSwipeComplete}
          swipeDirection={['down']}
        >
          <View style={styles.modalContainer}>
            <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.exitButton}>
              <Text style={styles.modalClose}><Icon name="closecircle" size={35} color="white" /></Text>
            </TouchableOpacity>
              
            <Settings />

          </View>
          
        </Modal>
        </SafeAreaView>
    </Swipeable>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingBottom: 3,
    paddingHorizontal: 4,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    height: 28,
    width: 28,
    backgroundColor: 'grey',
    padding: 4,
    borderRadius: 14,
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
  },
  smallText: {
    fontWeight: 'bold',
    color: 'gray',
    fontSize: 12,
  },
  largeText: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  modalContainer: {
    flex: 1,
    
    backgroundColor: 'teal',
  },
  modalText: {
    fontSize: 30,
    color: 'white',
  },
  modalClose: {
    fontSize: 20,
    color: 'white',
    marginTop: 20,
  },
  exitButton: {
    marginLeft: 20,
    marginTop: 20,
  },
  country: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  }
});