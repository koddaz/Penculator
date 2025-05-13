import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert, Linking } from "react-native";

export const dexcomAuthConfig = {
    // Production environment
    production: {
      clientId: 'Z01tZuko96PyGfe99alBIP0lxoR3siuu', // Get this from your Dexcom developer account
      clientSecret: 'LvWe5oem0XS4RPJ0', // Get this from your Dexcom developer account
      redirectUri: 'com.penculator://oauth', // e.g., com.yourapp:/callback
      authorizationEndpoint: 'https://api.dexcom.com/v2/oauth2/login',
      tokenEndpoint: 'https://api.dexcom.com/v2/oauth2/token',
      apiBaseUrl: 'https://api.dexcom.com/v2',
      scopes: ['offline_access'], // Grants refresh token access
    },
    
    // Sandbox environment (for testing)
    sandbox: {
      clientId: 'Z01tZuko96PyGfe99alBIP0lxoR3siuu',
      clientSecret: 'LvWe5oem0XS4RPJ0',
      redirectUri: 'com.penculator://oauth',
      authorizationEndpoint: 'https://sandbox-api.dexcom.com/v2/oauth2/login',
      tokenEndpoint: 'https://sandbox-api.dexcom.com/v2/oauth2/token',
      apiBaseUrl: 'https://sandbox-api.dexcom.com/v2',
      scopes: ['offline_access'],
    },
    

  };

  export function getSandboxAuthorizationUrl(state: string) {
    const config = dexcomAuthConfig.sandbox;
    return `${config.authorizationEndpoint}?client_id=${config.clientId}`
      + `&redirect_uri=${encodeURIComponent(config.redirectUri)}`
      + `&response_type=code`
      + `&scope=${config.scopes.join(' ')}`
      + `&state=${state}`;
  }
  
  export function getProductionAuthorizationUrl(state: string) {
    const config = dexcomAuthConfig.production;
    return `${config.authorizationEndpoint}?client_id=${config.clientId}`
      + `&redirect_uri=${encodeURIComponent(config.redirectUri)}`
      + `&response_type=code`
      + `&scope=${config.scopes.join(' ')}`
      + `&state=${state}`;
  }

  export const handleSignIn = async () => {
    try {
      const state = generateRandomState();
      await AsyncStorage.setItem('dexcom_auth_state', state); // Store state before redirect
      const authUrl = getSandboxAuthorizationUrl(state);
      const supported = await Linking.canOpenURL(authUrl);
      if (supported) {
        await Linking.openURL(authUrl);
      } else {
        Alert.alert('Error', 'Cannot open the authentication URL');
      }
    } catch (error) {
      console.error('Authentication error:', error);
      Alert.alert('Authentication Error', 'Failed to start the authentication process');
    }
  };

  export const generateRandomState = () => {
    return (
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15)
    );
  };