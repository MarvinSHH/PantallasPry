import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const Formulario = () => {
  const [nombre, setNombre] = useState("");
  const [apellidoPaterno, setApellidoPaterno] = useState("");
  const [apellidoMaterno, setApellidoMaterno] = useState("");
  const [usuario, setUsuario] = useState("");
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [confirmaContrasena, setConfirmarContrasena] = useState("");
  const [telefono, setTelefono] = useState("");

  // Placeholder para la función de navegación
  const navigateTo = (screen) => {
    // Aquí iría la lógica de navegación, por ejemplo utilizando React Navigation
    console.log(`Navigating to ${screen}`);
  };
  // Función para manejar el registro
  const handleRegister = () => {
    // Lógica para manejar el registro
    console.log("Registro:", {
      nombre,
      apellidoPaterno,
      apellidoMaterno,
      usuario,
      correo,
      contrasena,
      confirmaContrasena,
      telefono,
    });
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
          <Text style={styles.title}>Registro</Text>
          <TextInput
            placeholder="Ingrese su Nombre"
            style={styles.input}
            onChangeText={setNombre}
            value={nombre}
          />
          <TextInput
            placeholder="Apellido paterno"
            style={styles.input}
            onChangeText={setApellidoPaterno}
            value={apellidoPaterno}
          />
          <TextInput
            placeholder="apellido materno"
            style={styles.input}
            onChangeText={setApellidoMaterno}
            value={apellidoMaterno}
          />
          <TextInput
            placeholder="Usuario"
            style={styles.input}
            onChangeText={setUsuario}
            value={usuario}
          />
          <TextInput
            placeholder="Correo"
            style={styles.input}
            onChangeText={setCorreo}
            value={correo}
          />
          <TextInput
            placeholder="Contraseña"
            style={styles.input}
            onChangeText={setContrasena}
            value={contrasena}
          />
          <TextInput
            placeholder="Confirmar contraseña"
            style={styles.input}
            onChangeText={setConfirmarContrasena}
            value={confirmaContrasena}
          />
          <TextInput
            placeholder="Teléfono"
            style={styles.input}
            onChangeText={setNombre}
            value={nombre}
          />
          <TouchableOpacity
            style={styles.registerButton}
            onPress={handleRegister}
          >
            <Text style={styles.registerButtonText}>¡Regístrate ahora!</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigateTo("Login")}>
            <Text style={styles.loginButtonText}>¿Ya tengo Cuenta?</Text>
          </TouchableOpacity>

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
  /*xd*/
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 10,
  },
  input: {
    backgroundColor: "#fff",
    borderColor: "#000",
    borderWidth: 1,
    borderRadius: 5,
    padding: 7,
    marginVertical: 5,
    marginHorizontal: 20,
  },
  registerButton: {
    backgroundColor: "#c56d16e0",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
    marginHorizontal: 20,
  },
  registerButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  loginButtonText: {
    color: "blue",
    textAlign: "center",
    marginTop: 10,
  },
});

export default Formulario;
