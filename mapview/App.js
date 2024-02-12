import { StyleSheet, SafeAreaView } from 'react-native';
import Map from './screens/map';

export default function App() {
  return (
    <SafeAreaView style ={styles.container}>
    <Map />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
