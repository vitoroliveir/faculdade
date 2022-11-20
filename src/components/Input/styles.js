import styled from 'styled-components'

export const Container =  styled.View`
    display: flex;
    flex-direction: column;
`;

export const InputText =  styled.TextInput`
    height:${props => props.height ? props.height : "44px"} ;
    width: ${props => props.width ? props.width : "322px"} ;
    border: solid 1px rgba(208, 213, 221, 1);
    border-radius: 8px;
    margin-bottom: 27px;
    padding-left: 14px;
    padding-right: 14px;
    padding-bottom: 15px;
    margin-top: 8px;
    
    font-family: Inter_400Regular;
    font-size: 16px;

`;

export const TextLabel =  styled.Text`
    font-family: Inter_500Medium;
    font-size: 14px;

`;

