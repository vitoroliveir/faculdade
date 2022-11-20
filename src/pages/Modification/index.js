import React from 'react';
import { useEffect, useState } from "react";
import { api } from "../../services/api";

import { View } from 'react-native';
import Form from '../../components/Form';


export default function Modification({ navigation , route }) {
  const [projetos , setProjetos] = useState(projetos)

  const projeto = async () =>{
    const response = await api.get(`/Projects/${route.params.id}`)
    await setProjetos(response.data)

  }

  useEffect(()=>{
    projeto()
  },[])

  console.log(route.params.id)
  return (
    <View >
      <Form navigation={navigation} Content={projetos} id={route.params.id} type={"Modification"}/>
    </View>
  );
}