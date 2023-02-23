import {StyleSheet} from 'react-native';

const style=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'lightyellow',
        margin:16,      
    },
    safemain:{
        flex:1,
    },
    textstyle:{
         flex: 0.9, 
         alignSelf: 'center',
         marginTop: 24, 
         fontSize: 32, 
         fontWeight: 'bold'
    },
    textbtn:{
        color: 'white',
        flex: 0.8,
        fontSize: 26
    },
    // touchable
    touchstyle:{
        alignItems: 'center',
        height: 50,
        backgroundColor: 'green',
        justifyContent: 'center',
        marginHorizontal: 16,
        borderRadius: 8,

}})
export {style}
