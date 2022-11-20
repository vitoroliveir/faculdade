import React, {  useState } from "react";
import { 
    Container,
    InputText,
    TextLabel
} from './styles'

const Input = ({type,value,onChangeText, multiline ,label,placeholder, height, width, Content}) => {
    
    return (
        <Container>
            <TextLabel>{label}</TextLabel>
            <InputText
                onChangeText={onChangeText}
                value={value}
                multiline={multiline}
                placeholder={placeholder}
                keyboardType={type}
                height={height}
                width={width}
            >
                {Content}
            </InputText>
        </Container>
    )
}

export default Input;