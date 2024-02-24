import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";

const Inicio = () => {
  // Placeholder para la función de navegación
  const navigateTo = (screen) => {
    // Aquí iría la lógica de navegación, por ejemplo utilizando React Navigation
    console.log(`Navigating to ${screen}`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Planeta Mascotas</Text>
      </View>
      <View style={styles.navBar}>
        <TouchableOpacity onPress={() => navigateTo("Inicio")}>
          <Text style={styles.navText}>Inicio</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigateTo("Productos")}>
          <Text style={styles.navText}>Productos</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigateTo("IniciarSesion")}>
          <Text style={styles.navText}>Iniciar sesión</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigateTo("Registrarse")}>
          <Text style={styles.navText}>Registrarse</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.scrollView}>
        <View style={styles.mobileScreen}>
          <View style={styles.loginContainer}>
            <Text style={styles.loginTitle}>Iniciar sesión</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Usuario"
                placeholderTextColor="#4a4646"
              />
              <TextInput
                style={styles.input}
                placeholder="Contraseña"
                secureTextEntry
                placeholderTextColor="#4a4646"
              />
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Acceder</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.footer}>
            <Text style={styles.footerText}>
              &copy; Sitio desarrollado por PM-Planeta-Mascotas 2023
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(5, 7, 12, 0.75)",
  },
  scrollView: {
    backgroundColor: "transparent", // Asegúrate de que ScrollView no tenga su propio fondo
  },
  mobileScreen: {
    marginHorizontal: 2,
    backgroundColor: "white",
    borderRadius: 10,
    overflow: "hidden",
  },
  header: {
    backgroundColor: "#c56d16e0",
    alignItems: "center",
    height: 100,
  },
  headerText: {
    color: "#fff",
    fontSize: 22,
    padding: 30,
    borderColor: "#fff",
  },
  navBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "rgb(37, 40, 37)",
    paddingVertical: 20,
  },
  navText: {
    color: "#fff",
    fontSize: 16,
  },
  todo: {
    padding: 20,
    height: 580,
  },
  box: {
    backgroundColor: "#eee",
    padding: 20,
  },
  boxTitle: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 10,
  },
  boxText: {
    fontSize: 14,
  },
  footer: {
    backgroundColor: "#4a4646",
    padding: 10,
    alignItems: "center",
  },
  footerText: {
    color: "#fff",
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
  loginContainer: {
    width: "90%",
    marginTop: 30,
    paddingLeft: 30,
    marginBottom: 270,
  },
  loginTitle: {
    fontSize: 20,
    color: "#FFF",
    textAlign: "center",
    marginBottom: 30,
  },
  inputContainer: {
    backgroundColor: "#FFF",
    borderRadius: 5,
    padding: 20,
    shadowColor: "#FFF",
    shadowOffset: { width: 7, height: 13 },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
  },
  input: {
    backgroundColor: "#FFF",
    color: "#FFF",
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    fontSize: 18,
  },
  button: {
    backgroundColor: "#c96500",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
  },
});

export default Inicio;
