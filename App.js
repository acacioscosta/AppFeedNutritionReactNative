import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native'
import Nutri from './src/Components/Nutri'
import api from './src/Services/api'

export default function App() {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    api.get('/nutri')
         .then(res => {
          setLoading(false)
          setData(res.data)
         })
    
  }, [])

  if(loading){
    return(
      <View style={styles.viewLoading}>
        <Text style={styles.carregando}>Loading ...</Text>
      </View>
    )
  }

  return (
    <View style={Platform.OS === 'android' ? styles.containerAndroid : styles.containerIOS}>
      <FlatList data={data} keyExtractor={item => item.id_nutri.toString()} renderItem={({ item }) => <Nutri data={item} />}>
      </FlatList>
    </View>
  )
}

const styles = StyleSheet.create({
  containerAndroid:{
    flex: 1,
    backgroundColor: '#ddd'
  },
  containerIOS:{
    paddingTop: 30,
    flex: 1,
    backgroundColor: '#ddd'
  },
  viewLoading:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  carregando:{
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center'
  }
})