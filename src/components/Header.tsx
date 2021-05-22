import React from "react";
import {TouchableOpacity} from "react-native";
import {View, Text, StatusBar, StyleSheet} from "react-native";

interface TodoInputProps {
  theme: string;
  changeTheme: () => void;
}
export function Header({theme, changeTheme}: TodoInputProps) {
  return (
    <>
      <View style={theme == "standard" ? styles.header : styles.headerDark}>
        <Text style={styles.headerText}>to.</Text>
        <Text style={[styles.headerText, {fontFamily: "Poppins-SemiBold"}]}>
          do
        </Text>
        <TouchableOpacity style={styles.headerText} onPress={changeTheme}>
          <Text style={styles.headerText}> Trocar o Tema</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingTop: StatusBar.currentHeight,
    paddingBottom: 44,
    backgroundColor: "#273FAD",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  headerText: {
    fontSize: 24,
    color: "#FFF",
    fontFamily: "Poppins-Regular",
  },
  headerDark: {
    paddingTop: StatusBar.currentHeight,
    paddingBottom: 44,
    backgroundColor: "#483C67",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
});
