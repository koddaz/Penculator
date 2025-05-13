import { StyleSheet } from "react-native";

export const colors = {
  
    primary: '#6200ee',
    secondary: '#03dac6',
    background: '#f0f0f0',
    onPrimary: '#000000',
    onSecondary: '#000000',
  
  }

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      alignItems: 'center',
      justifyContent: 'center',
    },
    topBar: {
      width: '100%',
      height: 50,
      backgroundColor: colors.primary,
      justifyContent: 'center',
      alignItems: 'center',
    },
    bgContainer: {
      flex: 1,
      backgroundColor: colors.background,
      justifyContent: 'center',
      alignItems: 'center',
    }
  });

export const textStyles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: colors.onPrimary,
        textAlign: 'center',
        marginBottom: 20,
    },
    subtitle: {
        fontSize: 18,
        color: colors.onSecondary,
        textAlign: 'center',
        marginBottom: 10,
    },
    body: {
        fontSize: 16,
        color: colors.onPrimary,
        textAlign: 'left',
        marginBottom: 5,
    },
    caption: {
        fontSize: 14,
        color: colors.onSecondary,
        textAlign: 'left',
        marginBottom: 5,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: colors.onPrimary,
        textAlign: 'center',
        padding: 10,
        borderRadius: 5,
        backgroundColor: colors.primary,
        marginTop: 10,
        marginBottom: 10,
    },
});

