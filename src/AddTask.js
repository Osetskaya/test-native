import { View } from 'native-base';
import React from 'react';
import { StyleSheet, TextInput, Button } from 'react-native';

export const AddTask = ({ onSubmit }) => {
  const [value, setValue] = React.useState('');

  const pressHandler = () => {
    if (value.trim()) {
      onSubmit(value);
      setValue('');
    }
  }

  return (
    <View style={styles.task}>
      <TextInput
        style={styles.inputTask}
        onChangeText={setValue}
        value={value}
        placeholder="Название задачи"
      />
      <Button title="Добавить" onPress={pressHandler}/>
    </View>
  )
}

const styles = StyleSheet.create({
  task: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  inputTask: {
    width: '70%',
    padding: 10,
    borderBottomColor: 'lightgrey',
    borderStyle: 'solid',
    borderBottomWidth: 2,
  }
});