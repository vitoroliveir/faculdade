import styled from "styled-components/native";

export const View = styled.View`
    display: flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    height:100%;


`;

export const LitsProjects = styled.FlatList`
    display: flex;
    flex-direction:column;
    
    position: relative;
    top: 50px;
`;

export const Project = styled.TouchableOpacity`
    background-color: #FF4444;
    height: 87px;
    width: 329px;
    border-radius: 20px;
    margin-bottom: 20px;
    display: flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;

`;

export const NameProject = styled.Text`
    font-size: 32px;
    color: #FFFFFF;
    
`;

