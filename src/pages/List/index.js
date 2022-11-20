
import React, { useEffect, useState } from "react";
import { RefreshControl } from "react-native";
import Button from "../../components/Button";
import { api } from "../../services/api";

import {
  View,
  LitsProjects,
  Project, 
  NameProject,
} from "./styles"


export default function List({ navigation }) {
  const [projetos , setProjetos] = useState(projetos)

  const projeto = async () =>{
    const response = await api.get('/Projects')
    await setProjetos(response.data)

  }

  useEffect(()=>{
    projeto()
    
  },[])

  return (
    <View>

      <LitsProjects
        showsVerticalScrollIndicator={false}
        data={projetos}
        renderItem={( projeto ) =>
            <Project
              onPress={() => navigation.navigate("Editar",{
                id: projeto.item.id
              }) }
            ><NameProject>{projeto.item.name}</NameProject></Project>
        }
        keyExtractor={(projeto) => {
          projeto.id;
        }}

        refreshControl={<RefreshControl refreshing={false} onRefresh={projeto}/>}
        
      >
      </LitsProjects>
      <Button onPress={()=>{
          navigation.navigate("Cadastro")
        }}><NameProject>+</NameProject></Button>
    </View>
  );
}