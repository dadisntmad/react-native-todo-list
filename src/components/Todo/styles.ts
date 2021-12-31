import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 350,
    backgroundColor: 'white',
    marginBottom: 18,
    padding: 14,
    borderRadius: 10,
  },
  todoText: {
    fontSize: 16,
  },
  iconContainer: {
    flexDirection: 'row',
  },
  deleteIcon: {
    marginLeft: 14,
  },
});

export default styles;
