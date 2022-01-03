import React from 'react';
import { View, Text, StyleSheet, Modal, TextInput, TouchableOpacity } from 'react-native';
import { Button } from '../components/Button/Button';
import { Todos } from '../components/Todos/Todos';

import { useDispatch, useSelector } from 'react-redux';
import { setEditMode, setInputValue, setIsVisible } from '../features/todosSlice';
import {
  selectEditMode,
  selectInputValue,
  selectIsVisible,
  selectSelectedTodo,
  selectTodos,
} from '../selectors/selectors';

import { collection, addDoc, serverTimestamp, doc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase';

export const HomeScreen = () => {
  const dispatch = useDispatch();
  const todos = useSelector(selectTodos);
  const isVisible = useSelector(selectIsVisible);
  const inputValue = useSelector(selectInputValue);
  const editMode = useSelector(selectEditMode);
  const selectedTodo = useSelector(selectSelectedTodo);

  const onOpenModal = () => {
    dispatch(setIsVisible(true));
  };

  const onCloseModal = async () => {
    if (!inputValue) return;

    try {
      await addDoc(collection(db, 'todos'), {
        todo: inputValue,
        timestamp: serverTimestamp(),
      });
    } catch (error) {
      console.log(error);
    }

    dispatch(setIsVisible(false));
    dispatch(setInputValue(''));
  };

  const onUpdateTodo = async () => {
    if (!inputValue) return;

    const todoRef = doc(db, 'todos', selectedTodo);

    await updateDoc(todoRef, {
      todo: inputValue,
    });

    dispatch(setIsVisible(false));
    dispatch(setEditMode(false));
    dispatch(setInputValue(''));
  };

  return (
    <View>
      {todos.length < 2 ? (
        <Text style={styles.title}>Today's task</Text>
      ) : (
        <Text style={styles.title}>Today's tasks</Text>
      )}
      <View style={styles.centeredView}>
        <Modal animationType="slide" visible={isVisible}>
          {editMode ? (
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <TextInput
                  placeholder="Update current todo"
                  style={styles.textInput}
                  returnKeyType="done"
                  value={inputValue}
                  onChangeText={(text) => dispatch(setInputValue(text))}
                />
                <TouchableOpacity style={styles.button} onPress={onUpdateTodo}>
                  <Text style={styles.text}>UPDATE</Text>
                </TouchableOpacity>
              </View>
            </View>
          ) : (
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <TextInput
                  placeholder="What do you need to do?"
                  style={styles.textInput}
                  returnKeyType="done"
                  value={inputValue}
                  onChangeText={(text) => dispatch(setInputValue(text))}
                />
                <TouchableOpacity style={styles.button} onPress={onCloseModal}>
                  <Text style={styles.text}>ADD</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </Modal>
      </View>
      <Todos />
      <Button onOpenModal={onOpenModal} />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    padding: 14,
    marginBottom: 14,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  textInput: {
    backgroundColor: '#eee',
    padding: 14,
    width: 300,
    marginBottom: 20,
    borderRadius: 14,
  },
  button: {
    backgroundColor: '#0575F3',
    padding: 14,
    width: 300,
    borderRadius: 14,
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
