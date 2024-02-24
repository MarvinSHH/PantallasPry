import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Picker } from "@react-native-picker/picker";

const Producto = () => {
  const [selectedCategory, setSelectedCategory] = useState();

  const navigateTo = (screen) => {
    console.log(`Navigating to ${screen}`);
    // Aquí iría la lógica de navegación, por ejemplo utilizando React Navigation
  };

  return (
    <View style={styles.container}>
      {/* ... header y navBar aquí ... */}

      <ScrollView style={styles.scrollView}>
        <View style={styles.mobileScreen}>
          <Text style={styles.categoryTitle}>Categorías</Text>
          <Picker
            selectedValue={selectedCategory}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedCategory(itemValue)
            }
            style={styles.picker}
          >
            {/* Añadir más opciones de Picker.Item aquí */}
            <Picker.Item label="Selecciona la categoría" value="none" />
            {/* Simulación de categorías */}
            <Picker.Item label="Categoría 1" value="cat1" />
            <Picker.Item label="Categoría 2" value="cat2" />
          </Picker>

          <TouchableOpacity
            style={styles.irButton}
            onPress={() => console.log("Ir a la categoría:", selectedCategory)}
          >
            <Text style={styles.irButtonText}>Ir</Text>
          </TouchableOpacity>

          <Image
            source={require("./path-to-your-image.jpg")} // Cambiar por la ruta de tu imagen
            style={styles.petImage}
          />

          <TouchableOpacity style={styles.facebookButton}>
            {/* Aquí iría la lógica para conectar con Facebook */}
            <Text style={styles.facebookButtonText}>f</Text>
          </TouchableOpacity>
        </View>
        {/* ... footer aquí ... */}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  // ... otros estilos que ya tienes definidos ...
  categoryTitle: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
  },
  picker: {
    height: 50,
    width: "100%",
    // Estilos adicionales si son necesarios
  },
  irButton: {
    backgroundColor: "#ffa500", // Color naranja para el botón 'Ir'
    borderRadius: 5,
    padding: 10,
    alignItems: "center",
    marginVertical: 10,
  },
  irButtonText: {
    color: "white",
    fontSize: 16,
  },
  petImage: {
    width: "100%",
    height: 200, // Ajusta esto según tus necesidades
    resizeMode: "contain",
    marginTop: 20,
  },
  facebookButton: {
    backgroundColor: "#4267B2", // Color de Facebook
    borderRadius: 50,
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  facebookButtonText: {
    color: "white",
    fontSize: 24,
  },
  // ... footer y otros estilos que necesites ...
});

export default Producto;
