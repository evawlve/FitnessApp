import { useState } from "react";
import { Text, View, Button, StyleSheet } from "react-native";

export default function Index() {
  const [message, setMessage] = useState("Welcome to FitnessApp!");

  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.title}>{message}</Text>

      {/* Button to change the message */}
      <Button title="Change Message" onPress={() => setMessage("Let's get fit! 🚀")} />

      {/* Instructions */}
      <Text style={styles.instructions}>Edit app/index.tsx to see changes live!</Text>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>This is the footer!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  instructions: {
    fontSize: 16,
    marginTop: 20,
    color: "gray",
  },
  footer: {
    marginTop: "auto", // Pushes this to the bottom
    padding: 20,
    backgroundColor: "#ddd",
    width: "100%",
    alignItems: "center",
  },
  footerText: {
    fontSize: 14,
    color: "black",
  },
});
