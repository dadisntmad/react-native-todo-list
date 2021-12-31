import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Todos } from '../../types/todosSlice';

import { Icon } from 'react-native-elements';

import styles from './styles';

type TodoProps = {
  todo: Todos;
};

export const Todo = ({ todo }: TodoProps) => {
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
        <TouchableOpacity>
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
