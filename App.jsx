import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ContactCard from './src/components/ContactCard';

export default function App() {

  const firstname = "Daniel Castro";
  const contacts = [
    { name: "Daniel Castro", telephone: "123-456-7890" },
    { name: "Jane Doe", telephone: "987-654-3210" },
    { name: "John Smith", telephone: "555-555-5555" },
  ];


  return (
    <View style={styles.container}>
      {contacts.map((contact, index ) => (
        <ContactCard 
        key={index} 
        name={contact.name} 
        telephone={contact.telephone} />
      ))}
      <StatusBar style="auto" />
    </View>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
