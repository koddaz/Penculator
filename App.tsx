import { StatusBar } from 'expo-status-bar';
import { Alert, Linking, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';

import { styles, textStyles } from './style';
import { getSandboxAuthorizationUrl, handleSignIn } from './scripts/authConfig';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react';


export default function App() {
  useEffect(() => {
  const handleUrl = async (event: {url: string}) => {
    const url = event.url;
    if (url.startsWith('com.penculator://oauth')) {
      const params = new URLSearchParams(url.split('?')[1]);
      const code = params.get('code');
      const returnedState = params.get('state');
      const storedState = await AsyncStorage.getItem('dexcom_auth_state');
      if (returnedState !== storedState) {
        Alert.alert('Error', 'State does not match. Possible CSRF attack.');
        return;
    }
    Alert.alert('Success', `Authorization code: ${code}`);
  }
};
  Linking.addEventListener('url', handleUrl);
  Linking.getInitialURL().then(url => {
    if (url && url.startsWith('com.penculator://oauth')) {
      handleUrl({ url });
    }
  });
  return () => Linking.removeAllListeners('url');
}, []);
  return (

    <SafeAreaView style={styles.container}>

      <View style={styles.topBar}>
        <Text style={textStyles.title}>
          Penculator
        </Text>
      </View>
      
      <View style={styles.bgContainer}>
        <DexcomView />
      </View>
    </SafeAreaView>
  );
}

export function DexcomView() {
  return (
    <View style={styles.bgContainer}>
      <Text style={textStyles.subtitle}>
        Dexcom Integration
      </Text>
      <Text style={textStyles.body}>
        Sign in to your Dexcom account to access your data.
      </Text>
      <DexcomButton />
    </View>
  )
}


const DexcomButton = () => {
  

return (
  <TouchableOpacity style={styles.button} onPress={handleSignIn}>
    <Text style={textStyles.buttonText}>Sign in with Dexcom</Text>
  </TouchableOpacity>
);
}


