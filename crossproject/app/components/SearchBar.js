import { StyleSheet, View, TextInput  } from 'react-native'
import React, { Component } from 'react'
import { MagnifyingGlassIcon } from "react-native-heroicons/outline";
import { FunnelIcon} from "react-native-heroicons/outline";
import { useTranslation } from 'react-i18next';


export default function SearchBar() {

  const {t, i18n} = useTranslation();


  return (
    <View className="flex-row items-center space-x-2 pb-2 mx-4">
      <View className="flex-row flex-1 space-x-2  bg-gray-200 p-3">
        <MagnifyingGlassIcon color='gray' size={20} />
        <TextInput placeholder={t('search')}
        keyboardType='default'/>
      </View>
      <FunnelIcon color ="teal" />

    </View>
  )
}


const styles = StyleSheet.create({})