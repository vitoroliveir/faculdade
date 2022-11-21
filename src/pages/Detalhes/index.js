import React from 'react';
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import Button from '../../components/Button';
import {
  View,
  Titulo,
  Container,
  Text,
  Title,
  ViewButton
} from "./styles"

export default function Detalhes({ navigation ,route}) {
  const [projetos , setProjetos] = useState([])

  const projeto = async () =>{
    const response = await api.get(`/Projects/${route.params.id}`)
    await setProjetos(response.data)
  }

  const deleteProjeto = async () =>{
    const response = await api.delete(`/Projects/${route.params.id}`)
    navigation.navigate("List")
  }

  useEffect(()=>{
    projeto()
  },[])

  projeto()

  return (
    <View >
      <Container>
        <Titulo>Nome:</Titulo>
        <Text>{projetos.name}</Text>
      </Container>

      <Container>
        <Titulo>Descricão:</Titulo>
        <Text>{projetos.description}</Text>
      </Container>

      <Container>
        <Titulo>Valor:</Titulo>
        <Text>{projetos.value}</Text>
      </Container>

      <Container>
        <Titulo>Ações:</Titulo>
        <Text>{projetos.actions}</Text>
      </Container>

      <Container>
        <Titulo>Referencias:</Titulo>
        <Text>{projetos.reference}</Text>
      </Container>

      <ViewButton>
          <Button left={"10px"} onPress={()=>{
              deleteProjeto()
            }}><Title>🗑</Title></Button>
          <Button background={"#91e489"}  onPress={()=>{
              navigation.navigate("Editar",{
                id: projetos.id
              })
            }}><Title>✎</Title></Button>
        </ViewButton>

    </View>
  );
}