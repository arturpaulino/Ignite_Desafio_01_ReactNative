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

  function handleAddTask(newTaskTitle: string) {
    //TODO - add new task if it's not empty
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

  return (
    <>
      <Header />
      <TodoInput addTask={handleAddTask} />

      <MyTasksList
        tasks={tasks}
        onPress={handleMarkTaskAsDone}
        onLongPress={handleRemoveTask}
      />
    </>
  );
}
