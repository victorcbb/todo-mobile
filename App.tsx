import { StatusBar } from 'react-native'
import { Home } from './src/screens/Home'
import { 
  useFonts, 
  Inter_400Regular,
  Inter_700Bold,
} from "@expo-google-fonts/inter"
import { CheckedTodoProvider } from './src/context/CheckedTodoContext'

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
    <StatusBar 
      barStyle="light-content"
      backgroundColor="transparent" 
      translucent
    />
    <CheckedTodoProvider>
      <Home />
    </CheckedTodoProvider>
    </>
    )
}