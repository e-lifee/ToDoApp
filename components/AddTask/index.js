import React, { useState } from 'react';
import { Text, TextInput, View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

const AddTask = ({ tasks, setTasks, setCount }) => {
  const [text, setText] = useState('');

  const handleAddTaskPress = () => {
    if (text.trim() !== '') {
      const newTask = { id: tasks.length, task: text, completed: false };
      setTasks([...tasks, newTask]);

      // Count remaining incomplete tasks and add 1 for the new task
      const remainingIncompleteTasks = tasks.filter(task => !task.completed).length + 1;
      setCount(remainingIncompleteTasks);

      setText('');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder='Enter a task...'
        value={text}
        onChangeText={setText}
      />
      <TouchableOpacity style={styles.button} onPress={handleAddTaskPress}>
        <Text style={styles.btnText}>ADD</Text>
      </TouchableOpacity>
    </View>
  );
}

export default AddTask;

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width / 1.05,
    height: Dimensions.get('window').height / 7,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00e600',
    padding: 5,
    borderRadius: 5,
    margin: 10,
    bottom:35
    
  },
  textInput: {
    backgroundColor: '#00e600',
    width: Dimensions.get('window').width / 1.09,
    height: Dimensions.get('window').height / 16,
    borderRadius: 5,
    padding: 5,
    color: 'black',
    textDecorationLine: 'underline',
  },
  button: {
    borderRadius: 5,
    width: Dimensions.get('window').width / 1.15,
    height: Dimensions.get('window').height / 16,
    backgroundColor: '#00b300',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
