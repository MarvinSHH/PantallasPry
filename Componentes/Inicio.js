import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
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
          <View style={styles.todo}>
            <Image source={require("../assets/OIP.jpg")} style={styles.image} />
            <View style={styles.box}>
              <Text style={styles.boxTitle}>BIENVENIDO A PLANETA MASCOTAS</Text>
              <Text style={styles.boxText}>
                En esta pagina web pretendemos vender un dispensador de alimento
                para mascotas en el cual el cliente podrá visualizar y realizar
                compras, y el administrador dará de alta a los empleados y
                productos.
              </Text>
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
    height: 540,
    marginTop: 40,
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
});

export default Inicio;
