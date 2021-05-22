import React, {useState} from "react";
import {
  Image,
  Platform,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import checkIcon from "../assets/icons/Check.png";

interface TodoInputProps {
  addTask: (task: string) => void;
  theme: string;
}

export function TodoInput({addTask, theme}: TodoInputProps) {
  const [task, setTask] = useState("");

  function handleAddNewTask() {
    const result = addTask(task);
    if (result != false) setTask("");
  }

  return (
    <View style={theme == "standard" ? styles.container : styles.containerDark}>
      <View
        style={[
          theme == "standard"
            ? styles.inputContainer
            : styles.inputContainerDark,
          Platform.OS === "ios"
            ? styles.inputIOSShadow
            : styles.inputAndroidShadow,
        ]}
      >
        <TextInput
          style={theme == "standard" ? styles.input : styles.inputDark}
          placeholder="Adicionar novo todo..."
          returnKeyType="send"
          onSubmitEditing={handleAddNewTask}
          onChangeText={(text: string) => setTask(text)}
          value={task}
        />
        <TouchableOpacity
          testID="add-new-task-button"
          activeOpacity={0.7}
          style={theme == "standard" ? styles.addButton : styles.addButtonDark}
          onPress={() => handleAddNewTask()}
        >
          <Image source={checkIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
  },
  containerDark: {
    backgroundColor: "#3D3D4D",
  },
  inputContainer: {
    backgroundColor: "#F5F4F8",
    borderRadius: 5,
    marginTop: -25,
    marginHorizontal: 40,
    height: 50,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    backgroundColor: "#F5F4F8",
    paddingLeft: 12,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },

  inputContainerDark: {
    backgroundColor: "#F5F4F8",
    borderRadius: 5,
    marginTop: -25,
    marginHorizontal: 40,
    height: 50,
    flexDirection: "row",
    alignItems: "center",
  },
  inputDark: {
    flex: 1,
    backgroundColor: "#34313D",
    paddingLeft: 12,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },

  inputIOSShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  inputAndroidShadow: {
    elevation: 5,
  },
  addButton: {
    backgroundColor: "#3FAD27",
    height: 50,
    paddingHorizontal: 16,
    justifyContent: "center",
    alignItems: "center",
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  addButtonDark: {
    backgroundColor: "#988BC7",
    height: 50,
    paddingHorizontal: 16,
    justifyContent: "center",
    alignItems: "center",
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
});
