import React from "react";
import api from "../tools/api";
import Toast from "react-native-toast-message";
import { StyleSheet, View, Image, TextInput, TouchableOpacity, Text } from "react-native";

export default function Login() {
  const [email, setEmail] = React.useState("Email");
  const [senha, setSenha] = React.useState("Senha");

  const handleLogin = async () => {
    api
      .post("/login", {
        email: email,
        senha: senha,
      })
      .then((response) => {
        Toast.show({
          type: "success",
          text1: "Sucesso!",
          text2: "Login realizado com sucesso!",
        });
      })
      .catch((error) => {
        Toast.show({
          type: "error",
          text1: "Erro!",
          text2: error.response.data.message,
        });
      })
        .finally(() => {
            setEmail("Email");
            setSenha("Senha");
        });
  };
  return (
    <View style={styles.login}>
      <Image source={require("../../assets/Logo.png")} />
      <Image source={require("../../assets/Marca.png")} />
      <View style={styles.form}>
        <TextInput
          editable
          clearTextOnFocus
          style={styles.input}
          value={email}
          inputMode="email"
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          editable
          clearTextOnFocus
          style={styles.input}
          value={senha}
          inputMode="password"
          onChangeText={(text) => setSenha(text)}
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  login: {
    width: "90%",
    height: 400,
    backgroundColor: "#303646",
    alignItems: "center",
    borderRadius: 12,
    paddingVertical: 20,
  },
  form: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  input: {
    height: 40,
    width: "80%",
    backgroundColor: "#fff",
    marginTop: 20,
    borderRadius: 5,
    padding: 10,
  },
  button: {
    width: "40%",
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#4f63d7",
    marginTop: 25,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
