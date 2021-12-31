import { SafeAreaView, StyleSheet } from 'react-native';
import { HomeScreen } from './src/screens/HomeScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import store from './src/app/store';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Provider store={store}>
        <SafeAreaProvider>
          <HomeScreen />
        </SafeAreaProvider>
      </Provider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E4EFF7',
  },
});
