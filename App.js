import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AddTask } from './src/AddTask';
import { ListTasks } from './src/ListTasks';

export default function App() {
  const [tasks, setTasks] = React.useState([]);

  const addTask = (text) => {
    setTasks(prev => [...prev, text]);
  }

  const removeTask = index => {
    row[index].close();
    setTasks(prev => prev.filter(item => prev.indexOf(item) != index));
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textHeader}>Test App Native</Text>
      </View>
      <View style={styles.content}>
        <AddTask onSubmit={addTask}/>
        <ListTasks
          removeTask={removeTask}
          tasks={tasks}
        ></ListTasks>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  header: {
    height: 60,
    backgroundColor: 'lightgrey',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: 10,
  },
  textHeader: {
    fontSize: 20,
  },
  content: {
    padding: 20,
  }
});
