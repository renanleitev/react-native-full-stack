import React from 'react';
import { StyleSheet, View } from 'react-native';
import Home from './src/pages/Home';
import CreateEmployee from './src/pages/CreateEmployee';
import Profile from './src/pages/Profile';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from './src/reducers/reducer';

const store = createStore(reducer);

const Stack = createStackNavigator();

const myOptions = {
  title: 'App de Exemplo',
  headerTintColor: 'white',
  headerStyle: {
    backgroundColor: '#006aff',
  },
};

function App() {
  return (
    <View style={styles.container}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={myOptions} />
        <Stack.Screen
          name="Create"
          component={CreateEmployee}
          options={{ ...myOptions, title: 'Funcionário' }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ ...myOptions, title: 'Perfil do Funcionário' }}
        />
      </Stack.Navigator>
    </View>
  );
}

export default () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <App />
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e0e0',
  },
});
