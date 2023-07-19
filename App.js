import React, { useState } from 'react';
import { Text, View, FlatList, StyleSheet } from 'react-native';
import AddTask from './components/AddTask/index';

const App = () => {
  const [count, setCount] = useState(0);
  const [tasks, setTasks] = useState([]);
   const markTaskAsCompleted = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = true;
    setTasks(updatedTasks);
  };

  const renderItem = ({ item, index }) => (
    <View style={styles.item}>
      <Text
        style={item.completed ? styles.completedItemText : styles.itemText}
        onPress={() => markTaskAsCompleted(index)} // Call the markTaskAsCompleted function on press
      >
        {item.task}
      </Text>
    </View>
  );
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headertext}>To Do List</Text>
        <Text style={styles.counter}>{count}</Text>
      </View>
      
      
      <FlatList
        data={tasks}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
      <AddTask tasks={tasks} setTasks={setTasks} setCount={setCount} />
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  headertext: {
    color: '#00e600',
    fontSize: 30,
    fontWeight: 'bold',
  },
  counter: {
    color: '#00e600',
    fontSize: 30,
  },
  item: {
    backgroundColor: '#ffffff',
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 20,
    borderRadius: 5,
  },
  itemText: {
    fontSize: 18,
  },
  completedItemText: {
    fontSize: 18,
    textDecorationLine: 'line-through',
    color: 'gray',
  },
});
