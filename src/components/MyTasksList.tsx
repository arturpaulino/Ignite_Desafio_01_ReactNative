import React from "react";
import {
  FlatList,
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  FlatListProps,
} from "react-native";

function FlatListHeaderComponent({theme}) {
  return (
    <View>
      <Text style={theme == "standard" ? styles.header : styles.headerDark}>
        Minhas tasks
      </Text>
    </View>
  );
}

interface MyTasksListProps {
  tasks: {
    id: number;
    title: string;
    done: boolean;
  }[];
  theme: string;
  onPress: (id: number) => void;
  onLongPress: (id: number) => void;
}

export function MyTasksList({
  theme,
  tasks,
  onLongPress,
  onPress,
}: MyTasksListProps) {
  return (
    <View style={theme == "standard" ? styles.container : styles.containerDark}>
      <FlatList
        data={tasks}
        keyExtractor={(item) => String(item.id)}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              testID={`button-${index}`}
              activeOpacity={0.7}
              onPress={() => onPress(item.id)}
              onLongPress={() => onLongPress(item.id)}
              style={item.done ? styles.taskButtonDone : styles.taskButton}
            >
              <View
                testID={`marker-${index}`}
                style={
                  item.done
                    ? theme == "standard"
                      ? styles.taskMarkerDone
                      : styles.taskMarkerDoneDark
                    : theme == "standard"
                    ? styles.taskMarker
                    : styles.taskMarkerDark
                }
              />
              <Text
                style={
                  item.done
                    ? theme == "standard"
                      ? styles.taskTextDone
                      : styles.taskTextDoneDark
                    : theme == "standard"
                    ? styles.taskText
                    : styles.taskTextDark
                }
              >
                {item.title}
              </Text>
            </TouchableOpacity>
          );
        }}
        ListHeaderComponent={<FlatListHeaderComponent theme={theme} />}
        ListHeaderComponentStyle={{
          marginBottom: 20,
        }}
        style={{
          marginHorizontal: 24,
          marginTop: 32,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  containerDark: {
    flex: 1,
    backgroundColor: "#3D3D4D",
  },
  header: {
    color: "#1F1F1F",
    fontSize: 24,
    fontFamily: "Poppins-SemiBold",
  },

  headerDark: {
    color: "#67E480",
    fontSize: 24,
    fontFamily: "Poppins-SemiBold",
  },

  taskButton: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    flexDirection: "row",
    alignItems: "center",
  },
  taskMarker: {
    height: 16,
    width: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#3D3D4D",
    marginRight: 10,
  },
  taskText: {
    color: "#3D3D4D",
  },

  taskMarkerDark: {
    height: 16,
    width: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#67E480",
    marginRight: 10,
  },
  taskTextDark: {
    color: "#67E480",
  },

  taskButtonDone: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    backgroundColor: "rgba(25, 61, 223, 0.1)",
    flexDirection: "row",
    alignItems: "center",
  },
  taskMarkerDone: {
    height: 16,
    width: 16,
    borderRadius: 8,
    backgroundColor: "#273FAD",
    marginRight: 10,
  },
  taskMarkerDoneDark: {
    height: 16,
    width: 16,
    borderRadius: 8,
    backgroundColor: "#67E480",
    marginRight: 10,
  },

  taskTextDone: {
    color: "#A09CB1",
    textDecorationLine: "line-through",
  },
  taskTextDoneDark: {
    color: "#E1E1E6",
    textDecorationLine: "line-through",
  },
});
