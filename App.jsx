import { StyleSheet, SafeAreaView } from "react-native";
import Login from "./src/screens/Login";
import Toast from "react-native-toast-message";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Toast ref={(ref) => Toast.setRef(ref)} />
      <Login />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flex: 1,
    backgroundColor: "#dce1eb",
    alignItems: "center",
    justifyContent: "center",
  },
});
