import React from 'react';
import { StyleSheet, View, FlatList, Animated, TouchableOpacity } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';

export const ListTasks = ({ removeTask, tasks }) => {
  let row = [];
  let prevOpenedRow;

  const RightActions = (index, progress) => {
    const trans = progress.interpolate({
      inputRange: [0, 1],
      outputRange: [100, 0],
    });
    return (
      <Animated.View style={[styles.rightAction, {transform: [{ translateX: trans }]}]}>
        <TouchableOpacity onPress={() => removeTask(index)}>
            <Text style={styles.actionText}>Удалить</Text>
        </TouchableOpacity>
      </Animated.View>
    ) 
  }

  const closeRow = index => {
    if (prevOpenedRow && prevOpenedRow !== row[index]) {
      prevOpenedRow.close();
    }
    prevOpenedRow = row[index];
  }

  return (
    <FlatList
      keyExtractor={(item, index) => `task${index}`}
      data={tasks}
      renderItem={({item, index}) => 
        <Swipeable
          renderRightActions={(progress) => RightActions(index, progress)}
          ref={ref => row[index] = ref}
          onSwipeableOpen={() => closeRow(index)}
        >
          <View style={styles.listTasks}>
            <Text>{item}</Text>
          </View>
        </Swipeable>
      }
    />
  )
}

const styles = StyleSheet.create({
  listTasks: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
    marginTop: 5,
    marginStart: 0,
  },
  rightAction: {
    flexDirection: 'row-reverse',
    width: 100,
    backgroundColor: '#dd2c00',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  actionText: {
    color: 'white',
  }
});