import React from "react";
import { StyleSheet, View } from "react-native";
//import Inicio from "./Componentes/inicio"; // Asegúrate de que la ruta sea correcta
import Inicio from "./Componentes/Inicio.js";
import Login from "./Componentes/Login.js";
import Producto from "./Componentes/Producto.js";
import Formulario from "./Componentes/Formulario.js";

export default function App() {
  return (
    <View style={styles.container}>
      <Producto />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
