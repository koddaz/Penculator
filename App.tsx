import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

import { styles, textStyles } from './style';


export default function App() {
  <StatusBar style="auto" />
  return (
    
    <View style={styles.container}>
      <View style={styles.topBar}>
      <Text style={textStyles.title}>
        Penculator
        </Text>
      </View>
      <View style={styles.bgContainer}>
      </View>
    </View>
  );
}





