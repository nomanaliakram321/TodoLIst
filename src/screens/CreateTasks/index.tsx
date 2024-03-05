// AddTaskScreen.tsx

import React, {useContext, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {TaskContext} from '../../context/taskContext.tsx';
import {Task} from '../../types';
import LabelInput from '../../component/Input/LabelInput.tsx';
import Pressable from '../../component/Pressable';
import Text from '../../component/Text';
import {colors} from '../../theme/colors.ts';

const CreateTask: React.FC = () => {
  const [task, setTask] = useState<string>('');
  const [taskDesc, setTaskDesc] = useState<string>('');
  const {addTask} = useContext(TaskContext);
  const navigation = useNavigation();

  const handleAddTask = () => {
    if (task.trim() !== '') {
      const newTask: Task = {
        id: Date.now(),
        title: task,
        dueDate: new Date(),
        description: taskDesc,
        completed: false,
      };
      addTask(newTask);
      setTask('');
      navigation.goBack();
    }
  };
  return (
    <View style={styles.container}>
      <LabelInput
        label={'Task title'}
        onChangeInput={setTask}
        placeholder={'Enter task title'}
      />
      <LabelInput
        style={styles.desc}
        onChangeInput={setTaskDesc}
        inputStyle={styles.descContainer}
        label={'Task description'}
        multiline={true}
        numberOfLines={5}
        placeholder={'Enter task description'}
      />
      <Pressable onPress={handleAddTask} style={styles.btnContainer}>
        <Text color={colors.WHITE}>Add Task</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  desc:{
    marginTop: 20
  },
  descContainer:{height: 100, textAlignVertical: 'top'},
  btnContainer: {
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 40,
    backgroundColor: colors.PRIMARY,
  },
});

export default CreateTask;
