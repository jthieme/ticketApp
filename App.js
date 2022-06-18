import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home';
import NavBar from './components/NavBar';
import AddTask from './screens/AddTask';
import Account from './screens/Account';

// Firebase Cloud Database
// import { firebase } from './config/keys';


export default function App() {
  return (
  <>
    <NavBar />
  </>
  );
};