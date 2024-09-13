import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../screens/HomeScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import GetInspired from '../screens/GetInspired';
import { useTranslation } from 'react-i18next';
import { Badge } from 'react-native-elements';
import { View } from 'react-native';
import { useFoods } from '../context/FoodProvider';

const Tab = createBottomTabNavigator();

export default function Navigation(){
    const {t} = useTranslation();
    const { foods } = useFoods();
    const uniqueFoods = foods.reduce((acc, currentFood) => {
        const existingFood = acc.find((food) => food.name === currentFood.name);
        if (!existingFood) {
          acc.push(currentFood);
        }
        return acc;
    }, []);

    return(
        <Tab.Navigator
        screenOptions = {({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => 
            {
                let iconName;

                if (route.name === t('list')) {
                    iconName = focused ? 'basket-outline' : 'basket-outline';
                } else if (route.name === 'Settings') {
                    iconName = focused ? 'settings' : 'Shop';
                
                }else if (route.name === t('getInspired')){
                    iconName = focused ? 'compass' : 'compass-outline';
                }else if (route.name === 'Map'){
                    iconName = focused ? 'map' : 'map-outline';
                }
                
                // Define the badge count based on the route
                let badgeCount = 0;
                if (route.name === t('list')) {
                    badgeCount = uniqueFoods.length;
                }

                // You can return any component that you like here!
                return (
                    <View>
                        <Ionicons name={iconName} size={size} color={color} />
                        {badgeCount > 0 && (
                            <Badge value={badgeCount} status="success" containerStyle={{position: 'absolute', top: -5, right: -4}}/>
                        )}
                    </View>
                )
            },
            tabBarActiveTintColor: 'teal',
            tabBarInactiveTintColor: 'gray',
        })}
        >
        <Tab.Screen name={t('list')} component={HomeScreen} />
        <Tab.Screen name={t('getInspired')} component={GetInspired} />
        </Tab.Navigator>
    );
}