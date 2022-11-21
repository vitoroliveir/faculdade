import React, { useState } from 'react';
import Input from "../Input"
import { ScrollView } from 'react-native';
import { api } from "../../services/api";
import {
  View,
  Title,
  ViewButton,
  ViewForm,
  Imagem
} from "./styles"
import Button from '../Button';

export default function Form({ navigation, Content, id, type }) {
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [value, setValue] = useState("")
  const [actions, setActions] = useState("")
  const [reference, setReference] = useState("")


  const editarProjeto = async () => {
    await api.put(`/Projects/${id}`, {
      description: description == "" ? Content.description : description,
      name: name == "" ? Content.name : name,
      value: value == "" ? Content.value : value,
      actions: actions == "" ? Content.actions : actions,
      reference: reference == "" ? Content.reference : reference

    }).then(() => {
      console.log("editado com sucesso")
      navigation.navigate("Detalhes", {
        id: id
      })

    })

  }

  const criarProjeto = async () => {
    await api.post(`/Projects`, {
      description: description,
      name: name,
      value: value,
      actions: actions,
      reference: reference
    }).then(() => {
      console.log("criado com sucesso")
      navigation.navigate("Projetos")

    })
  }

  return (
    <View behavior={Platform.OS == "ios" ? "padding" : "height"} keyboardVerticalOffset={-10}>

      <ScrollView>
        <ViewForm>
          <Input
            onChangeText={(value) => setName(value)}
            name={"name"}
            label={"Nome:"}
            placeholder={"Nome do Projeto"}
            Content={Content ? Content.name : ""}
          ></Input>

          <Input
            onChangeText={(value) => setDescription(value)}
            name={"Descricao"}
            multiline={true}
            label={"Descrição:"}
            placeholder={"Descrição"}
            height={"80px"}
            Content={Content ? Content.description : ""}
          ></Input>

          <Input
            onChangeText={(value) => setValue(value)}
            type={"numeric"}
            name={"Valor"}
            label={"Valor:"}
            placeholder={"Valor"}
            Content={Content ? Content.value : ""}
          ></Input>

          <Input
            onChangeText={(value) => setActions(value)}
            name={"acoes"}
            multiline={true}
            label={"Ações:"}
            placeholder={"Ações"}
            height={"150px"}
            Content={Content ? Content.actions : ""}
          ></Input>

          <Input
            onChangeText={(value) => setReference(value)}
            name={"referencia"}
            multiline={true}
            label={"Referencia:"}
            placeholder={"Referencia"}
            height={"100px"}
            Content={Content ? Content.reference : ""}
          ></Input>
        </ViewForm>
        {type == "Modification" ? (
          <ViewButton>
            <Button background={"#91e489"} onPress={() => {
              editarProjeto()
            }}>
              <Imagem source={require('../../img/check.png')}/>
            </Button>
          </ViewButton>
        ) : (
          <ViewButton>
            <Button onPress={() => {
              navigation.navigate("Projetos")
            }}><Imagem source={require('../../img/x.png')}/></Button>
            <Button background={"#91e489"} left={"10px"} onPress={() => {
              criarProjeto()
            }}>
              <Imagem source={require('../../img/check.png')}/>
            </Button>
          </ViewButton>
        )
        }


      </ScrollView>

    </View>

  );
}