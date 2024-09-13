import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { MapIcon, MinusCircleIcon, PlusCircleIcon } from "react-native-heroicons/outline";

const GroceryElement = ({ id, name, description, price, image, raiting, ecoScore, storeName, nationality }) => {
  const [isPressed, setIsPressed] = useState(false);
  const currency = nationality?.name === "Switzerland" ? " CHF" : " $";

  return (
    <>
      <TouchableOpacity
        onPress={() => setIsPressed(!isPressed)}
        className={`bg-white border p-4 border-gray-200 ${isPressed && "border-b-0"}`}
      >
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 20, marginBottom: 5 }}>{name}</Text>
            <Text style={{ color: "#A3A3A3" }}>{description}</Text>

            <View style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  source={require("../assets/price-logo.png")}
                  style={{ width: 20, height: 20, marginRight: 5 }}
                />
                <Text style={{ fontSize: 18 }}>
                  {price}
                  {currency}
                </Text>
              </View>
              {ecoScore && (
                <View style={{ flexDirection: "row", alignItems: "center", flex: 1, justifyContent: "center" }}>
                  <Image
                    source={require("../assets/mini-logo.png")}
                    style={{ width: 20, height: 20, marginRight: 5 }}
                  />
                  <Text style={{ fontSize: 16 }}>{ecoScore}</Text>
                  {storeName && (
                    <Text style={{ fontSize: 16, marginLeft: 5 }}>{storeName}</Text>
                  )}
                </View>
              )}
            </View>
          </View>

          <View>
            <Image
              style={{
                borderWidth: 1,
                borderColor: "#F3F3F4",
              }}
              source={{
                uri: image,
              }}
              className="h-20 w-20 bg-grey-300 p-4"
            />
          </View>
        </View>
      </TouchableOpacity>

      {isPressed && (
        <View className="bg-white px-4">
          <View className="flex-row items-center space-x-2 pb-3">
            <Text className="left-36">Open on Maps</Text>
            <MapIcon color="teal" size={40} />
          </View>
        </View>
      )}
    </>
  );
};

export default GroceryElement;
