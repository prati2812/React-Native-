import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    t1:{
      fontSize:30,
      color:'blue',
      textAlign: 'center'
    },
    item:{
        fontSize:20,
        margin:10,
        marginBottom:5,
        borderColor:'black',
        borderWidth:3,
        padding:10,
        borderRadius:10,
    },
    error:{
       marginLeft:11,
       color:'red' 
    },
    grid:{
        fontSize:20,
        borderColor:'black',
        borderWidth:3,
        width:80,
        textAlign:'center',
        margin:30,
        padding:10,
    },
    btn:{
        backgroundColor:'gray',
        margin:20,
        padding:10,
        fontSize:20,
        borderRadius:10,
        color:'white',
        textAlign:'center',
        width:100,
        height:50,
        elevation:10,
        shadowColor:'gray',
        shadowOpacity:10            
    },
    primary:{
        backgroundColor:'blue'
    },
    radiotxt:{
        fontSize:20,
        color:'black',
    },
    radio:{
        width:40,
        height:40,
        borderWidth:3,
        borderRadius:20,
        margin:10
    },
    radioSelection:{
        backgroundColor:'black',
        width:30,
        height:30,
        borderRadius:20,
        margin:2  
    },
    wrapper:{
        flexDirection:'row',
        alignItems:'center'
    },
    main:{
        flex:1
    },
    btnView:{
        flex:1,
        justifyContent:'flex-end'
    },
    centerView:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    modelView:{
        backgroundColor:'white',
        padding:30,
        borderRadius:20,
        elevation:10,
        margin:10
    },
    modalText:{
        fontSize:20,
        margin:10,
        color:'black',
    },
    textInputStyle: {
        height: 40,
        borderWidth: 1,
        paddingLeft: 20,
        borderColor:'white',
        backgroundColor: 'white',
        borderRadius:10,
        elevation:10,
        marginTop:15,
        padding:10,
        fontSize:15
      },
     
});

