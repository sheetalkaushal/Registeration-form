import { StyleSheet } from 'react-native';
const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#123456',
        margin: 16,
        borderRadius: 12,
    },
    formstyle: {
        fontWeight: 'bold',
        fontSize: 25,
        alignSelf: 'center',
        marginTop: 16,
        color: 'white'
    },
    // formpagestyle start
    formstyle1:{
        width:80,
        height:100,
        marginRight:20
    },
    formstyle2:{
        width:80,
        height:100,
        marginLeft:20,
    },
    btnstyle:{
        flexDirection:'row',
        alignSelf:'center',
        gap:45,
        // formpagestyle end
    },
    // welcomepage style
    img:{
        height:'30%',
        width:'70%',
        alignSelf:'center',
        marginVertical:100,
      
    },
    // loginpage css

    btnlog:{ 
        alignSelf:'center',
        marginTop:40,
        width:100,
        height:100,
        
    },
    // loginpage style
    lgtxt:{
        fontSize:30,
        fontWeight:'bold',
        color:'brown',
        alignSelf:'center',
        

    }
})
export { style }