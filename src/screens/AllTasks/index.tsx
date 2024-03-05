// TaskListScreen.tsx

import React, {useContext, useLayoutEffect, useState} from 'react';
import {View, Button, FlatList, StyleSheet, Alert} from 'react-native';
import {TaskContext} from '../../context/taskContext.tsx';
import {RootStackParamList} from '../../types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import IconButton from '../../component/Pressable/IconButton.tsx';
import Pressable from '../../component/Pressable';
import {colors} from '../../theme/colors.ts';
import Text from '../../component/Text/index.tsx';
import Icon from '../../component/Icon';

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'AllTask'
>;

type Props = {
  navigation: HomeScreenNavigationProp;
};
const AllTasks: React.FC<Props> = ({navigation}) => {
  const {tasks, toggleTask, deleteTask} = useContext(TaskContext);
  const [showCompleted, setShowCompleted] = useState(false);
  const filteredTasks = showCompleted
    ? tasks.filter(task => task.completed)
    : tasks;

  // const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'All Task',
      headerRight: () => (
        <View style={{flexDirection: 'row'}}>
          <Pressable
            onPress={() => {
              setShowCompleted(state => {
                return !state;
              });
            }}>
            <Icon
              style={{marginRight: 10}}
              icon={'check_box'}
              color={colors.BLUE}
              size={20}
            />
          </Pressable>
          <Pressable>
            <Icon icon={'move'} color={colors.BLUE} size={20} />
          </Pressable>
        </View>
      ),
    });
  }, [navigation]);
  const renderTaskItem = ({item}: any) => (
    <View style={styles.taskItem}>
      <View style={styles.contentStyle}>
        <Text
          color={item.completed ? colors.GREEN_TINT : colors.BLACK}
          fontSize={18}>
          {item.title}
        </Text>
        <Text numberOfLines={5} color={colors.GREY}>
          {item.description}
        </Text>
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
          <Icon icon={'clock'} size={15} color={colors.GREY} />
          <Text style={{marginLeft: 10}}>{item.dueDate.toLocaleString()}</Text>
        </View>
      </View>
      <View style={{flexDirection: 'row'}}>
        <IconButton
          style={{marginRight: 10}}
          name={item.completed ? 'check_box' : 'check_box_outline_blank'}
          size={20}
          onPress={() => {
            toggleTask(item.id);
          }}
          iconColor={item.completed ? colors.GREEN_TINT : colors.BLACK}
        />
        <IconButton
          name={'delete'}
          size={20}
          onPress={() => {
            deleteTask(item.id);
          }}
          iconColor={'red'}
        />
      </View>
    </View>
  );

  // @ts-ignore
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.taskList}
        data={filteredTasks}
        renderItem={renderTaskItem}
        keyExtractor={item => item.id.toString()}
      />
      <Pressable
        onPress={() => navigation.navigate('CreateTask')}
        style={styles.btnContainer}>
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
  taskList: {
    flex: 1, // Added flex: 1 to taskList style
  },
  contentStyle: {flex: 0.9},
  taskItem: {
    flexDirection: 'row',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.BORDER,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  completedTask: {
    color: 'gray',
  },
  btnContainer: {
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 5,
    // marginTop: 40,
    backgroundColor: colors.PRIMARY,
  },
});

export default AllTasks;
