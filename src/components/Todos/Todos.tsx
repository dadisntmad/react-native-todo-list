import React, { useEffect } from 'react';
import { FlatList } from 'react-native';
import { Todo } from '../Todo/Todo';

import { useDispatch, useSelector } from 'react-redux';
import { setTodos } from '../../features/todosSlice';
import { selectTodos } from '../../selectors/selectors';

import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db } from '../../../firebase';

export const Todos = () => {
  const dispatch = useDispatch();
  const todos = useSelector(selectTodos);

  useEffect(() => {
    const q = query(collection(db, 'todos'), orderBy('timestamp', 'desc'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      dispatch(setTodos(querySnapshot.docs.map((doc) => ({ id: doc.id, todo: doc.data().todo }))));
    });
    return unsubscribe;
  }, []);

  return (
    <FlatList
      data={todos}
      extraData={todos}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => {
        return <Todo todo={item} />;
      }}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ maxHeight: 475, alignItems: 'center' }}
    />
  );
};
