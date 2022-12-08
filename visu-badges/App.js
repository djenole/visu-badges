import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Badge from './src/components/Badge';
export default function App() {
  return (
    <View style={styles.container}>
      <Badge/>
      <Text>visualização de badges</Text>
      <StatusBar style="auto" />
    </View>
  ); 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(245,130,32,0.53)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
