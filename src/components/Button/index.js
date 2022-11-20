import styled from 'styled-components'

const Button = styled.TouchableOpacity`
    width:65px;
    height:65px;
    position:absolute;
    top:85%;
    left:${props => props.left ? props.left : "250px"} ;
    background-color:${props => props.background ? props.background : "#FA6262"} ;
    border-radius:50px;
    display:flex;
    align-items:center;
    justify-content:center;

    
    
`
export default Button;