import App from './App';
import { Stack } from 'expo-router';

export const rootLayout = () => {
  return (
    <Stack>
        <Stack.Screen name="App" options={{ headerShown: false }} />
    </Stack>
  );
}

export default rootLayout;