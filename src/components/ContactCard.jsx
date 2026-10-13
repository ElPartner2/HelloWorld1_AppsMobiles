import {View,Text} from 'react-native';

export default function ContactCard(props){

 // Logica de programacion

 // Siempre regresa JSX (Interfaz de usuario)

 return (
    <View>
        <Text>Hola, {props.name} </Text>
        <Text>{props.telephone}</Text>
    </View>
 );

}