import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SignInPage from './pages/signin';
import { Provider, useSelector } from 'react-redux';
import store from './redux/store';

export default function App() {
  return (
    <View style={styles.container}>
      <Provider store={store}>
      <SignInPage/>
      <AnotherComponent/>
      </Provider>
    </View>
  );
}


const AnotherComponent=()=>{
  const {isAuth} = useSelector((state:any)=>state.isAuth)
  return(
    <View>
      <Text>this is a another component</Text>
      <Text>Is Auth ? : {isAuth?'true':'false'}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
