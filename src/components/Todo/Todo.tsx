import React from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { Todos } from '../../types/todosSlice';

import { doc, deleteDoc } from 'firebase/firestore';
import { db } from '../../../firebase';

import { Icon } from 'react-native-elements';

import styles from './styles';

type TodoProps = {
  todo: Todos;
};

export const Todo = ({ todo }: TodoProps) => {
  const onDeleteTodo = () =>
    Alert.alert('Confirm', 'Press OK to delete', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      { text: 'OK', onPress: async () => await deleteDoc(doc(db, 'todos', todo.id)) },
    ]);

  return (
    <View style={styles.container}>
      <Text style={styles.todoText}>{todo.todo}</Text>
      <View style={styles.iconContainer}>
        <TouchableOpacity>
          <Icon
            name="edit"
            type="materialicons"
            color="black"
            size={24}
            tvParallaxProperties={undefined}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={onDeleteTodo}>
          <Icon
            style={styles.deleteIcon}
            name="delete"
            type="materialicons"
            color="red"
            size={24}
            tvParallaxProperties={undefined}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
