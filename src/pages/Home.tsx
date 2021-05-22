import React, {useState} from "react";
import {Alert} from "react-native";

import {Header} from "../components/Header";
import {MyTasksList} from "../components/MyTasksList";
import {TodoInput} from "../components/TodoInput";

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [themes, setThemes] = useState<String>("standard");

  function handleAddTask(newTaskTitle: string) {
    if (
      newTaskTitle.toString() == "" ||
      newTaskTitle == null ||
      newTaskTitle == undefined
    ) {
      Alert.alert("Por favor informe um nome para Tarefa");
      return false;
    }
    const filter = tasks.filter((item) => {
      return item.title.toLowerCase() == newTaskTitle.toLowerCase()
        ? true
        : false;
    });
    if (filter.length > 0) {
      Alert.alert("Tareja ja existe, por favor informE outra tarefa ");
      return false;
    }
    const newItem: Task = {
      id: new Date().getTime(),
      title: newTaskTitle,
      done: false,
    };
    setTasks((oldTasks: Task[]) => [...oldTasks, newItem]);
  }

  function handleMarkTaskAsDone(id: number) {
    const filter = tasks.filter((item) => {
      if (item.id == id) item.done = !item.done;
      return true;
    });
    setTasks((oldTasks: Task[]) => filter);
  }

  function handleRemoveTask(id: number) {
    const filter = tasks.filter((item) => {
      if (item.id == id) return false;
      else return true;
    });
    setTasks((oldTasks: Task[]) => filter);
  }

  function changeTheme() {
    const newTheme: string = themes == "standard" ? "dark" : "standard";
    setThemes(newTheme);
  }

  return (
    <>
      <Header theme={themes} changeTheme={changeTheme} />
      <TodoInput addTask={handleAddTask} theme={themes} />

      <MyTasksList
        theme={themes}
        tasks={tasks}
        onPress={handleMarkTaskAsDone}
        onLongPress={handleRemoveTask}
      />
    </>
  );
}
