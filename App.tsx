import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppInner from './src/app/App';

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <AppInner />
    </SafeAreaProvider>
  );
}

export default App;
