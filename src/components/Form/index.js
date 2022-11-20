import React, { useState } from 'react';
import Input from "../Input"
import { ScrollView,KeyboardAvoidingView } from 'react-native';
import { api } from "../../services/api";
import {
  View,
  Title,
  ViewButton
} from "./styles"
import Button from '../Button';

export default function Form({navigation, Content ,id , type}) {
  const [name, setName] = useState()
  const [description, setDescription] = useState()
  const [value, setValue] = useState()
  const [actions , setActions ] = useState()
  const [reference , setReference ] = useState()


  const editarProjeto = async () =>{
    api.post
    const response = await api.put(`/Projects/${id}`,{
      description: description,
      name:name,
      value: value,
      actions:actions,
      reference:actions

    }).then(()=>{
      console.log("editado com sucesso")
      navigation.navigate("List")
      
    })

  }

  const criarProjeto = async () =>{
    const response = await api.post(`/Projects`,{
      description: description,
      name:name,
      value: value,
      actions:actions,
      reference:actions

    }).then(()=>{
      console.log("criado com sucesso")
      navigation.navigate("List")
      
    })


  }

  return (
    <View >
      <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}>
      <ScrollView >
        <Input
          onChangeText={(value)=> setName(value)}
          name={"name"}
          label={"Nome"}
          placeholder={"Nome do Projeto"}
          Content={Content ? Content.name : ""}
        ></Input>

        <Input
          onChangeText={(value)=> setDescription(value)}
          name={"Descricao"}
          multiline={true}
          label={"Descrição"}
          placeholder={"Descrição"}
          height={"80px"}
          Content={Content ? Content.description : ""}
        ></Input>

        <Input
          onChangeText={(value)=> setValue(value)}
          type={"numeric"}
          name={"Valor"}
          label={"Valor"}
          placeholder={"Valor"}
          Content={Content ? Content.value : ""}
        ></Input>

        <Input
          onChangeText={(value)=> setActions(value)}
          name={"acoes"}
          multiline={true}
          label={"Ações"}
          placeholder={"Ações"}
          height={"150px"}
          Content={Content ? Content.actions : ""}
        ></Input>

        <Input
          onChangeText={(value)=> setReference(value)}
          name={"referencia"}
          multiline={true}
          label={"referencia"}
          placeholder={"referencia"}
          height={"100px"}
          Content={Content ? Content.reference : ""}
        ></Input>
      </ScrollView>
      </KeyboardAvoidingView>

      
      {  type == "Modification" ? (
        <ViewButton>
          <Button onPress={()=>{
              navigation.navigate("List")
            }}><Title>x</Title></Button>
          <Button background={"#91e489"} left={"10px"} onPress={()=>{
              editarProjeto() 
            }}><Title>✓</Title></Button>
        </ViewButton>
        ):(
        <ViewButton>
          <Button onPress={()=>{
              navigation.navigate("List")
            }}><Title>x</Title></Button>
          <Button background={"#91e489"} left={"10px"} onPress={()=>{
              criarProjeto()
            }}><Title>✓</Title></Button>
        </ViewButton>
        )
      }
      


    </View>
  );
}