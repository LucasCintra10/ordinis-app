import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.login}>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flex: 1,
    backgroundColor: '#dce1eb',
    alignItems: 'center',
    justifyContent: 'center',
  },
  login: {
    width: '90%',
    height: 400,
    backgroundColor: '#303646',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
  },
});
