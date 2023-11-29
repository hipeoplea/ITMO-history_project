import { StyleSheet } from 'react-native';
import { Button } from '@rneui/base';

export default function App() {
  return (
    <Button title="Hello World" />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
