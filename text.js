
import { StyleSheet, Text, View } from 'react-native';
import { ReloadInstructions } from 'react-native/Libraries/NewAppScreen';
// import {style} from './style';

export default function App() {
  return (
 
    <View style={styles.container}>
      <Text style={{color:'red',fontWeight:'800',border:'2pxsolid'}}>hello world this react native </Text>
    
    </View>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightyellow',
    alignItems:'center',
    justifyContent:'center',
    border:'2pxsolid',

    
  },
});
