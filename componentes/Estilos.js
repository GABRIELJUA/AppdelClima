import {StyleSheet} from 'react-native';

export const estilos = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ADD8E6',
        
    },
    contenedorBotones: {
        flex: 2,
        paddingTop: 10,
        flexDirection:'row',
        flexWrap:'wrap',
        marginTop:5,
        
    },
    textoCaja: {
        color: 'black',
        fontSize: 60,
        marginTop:180,

    },
    textoBoton: {
        color: 'black',
        fontSize: 34
    },
    botonNum: {
        width: 90, // Tamaño del botón
        height: 90, // Tamaño del botón
        borderRadius: 50, // Hace el botón completamente redondo (la mitad del ancho o alto)
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#828282',
        margin: '1%',
        marginRight:12,
        marginBottom: 15,
    },
    boton: {
        width: 87, // Tamaño del botón
        height: 87, // Tamaño del botón
        borderRadius: 50, // Hace el botón completamente redondo (la mitad del ancho o alto)
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'orange',
 
        margin: '1.3%',
        marginLeft: 12,
        marginBottom: 20,
    },
    estiloCaja:{
        height:280,
        margin:5,
        alignItems:'flex-end',
        justifyContent:'center',
        padding:10,
        backgroundColor: 'white',
    },
    titulo:{
        fontSize:25,
        padding:7,
        fontWeight: 'bold',
    },
    cardItem:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        borderWidth: 1,
        borderColor: '#adacac',
        borderRadius: 10,
        marginBottom:15,
        
    },
    imgItem:{
        margin:10,   
    },
    infoItem:{
        flex: 2,
        margin:7,
        fontSize:25,
    },
    textNameItem:{
        fontWeight: 'bold',
        fontSize:20,
    },
    textInfoItem:{
        fontSize:16,
    },

   
    //ESTILOS DEL COMPONENTE PERSONAJESDISNEY
    titulo:{
        fontSize:25,
        padding:7,
        fontWeight: 'bold',
        backgroundColor:'pink',
        textAlign:'center',
        color:'white'
    },
    cardItem:{
        flexDirection:'column',
        borderRadius: 10,
        marginBottom:15,
        backgroundColor:'pink',
        alignItems:'center'
        
    },
    imgItem:{
        margin:1,   
       alignItems:'center',
     
    },
    infoItem:{
        flex: 2,
        margin:7,
        fontSize:25,
        alignItems:'center'
      
    },
    textNameItem:{
        fontWeight: 'bold',
        fontSize:20,
        color:'black',
        textAlign:'center',
        alignItems:'center'
        
    },
    textInfoItem:{
        fontSize:16,
        color:'black',
        textAlign:'center',
        alignItems:'center'
    },


    //ESTILOS DEL COMPONENTE CLIMA
    locate:{
        color:'black',
        fontWeight: 'light',
        fontSize:30,
        paddingTop:5,
        paddingLeft:10,
        paddingBottom:10,
        textAlign:'center',
        marginTop:80,
    },
    temp:{
        color:'orange',
        borderWidth:5,
        fontWeight: 'light',
        fontSize:100,
        textAlign:'center',
        paddingTop:1,
        marginLeft:0,
        backgroundColor: 'grey',
        borderColor:'grey',
    },
    condicion:{
        color:'black',
        fontWeight: 'light',
        fontSize:18,
        textAlign:'center',
    },
    lista: {
        borderRadius: 10, // Ajusta el radio de borde según sea necesario
 // Puedes agregar un borde si lo deseas

        backgroundColor: 'grey',
        marginTop:30,
        padding:15,
    },
    cardItemClima:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop:0,
        backgroundColor: 'skyblue',
    },
    cardItemHour:{
        flexDirection: 'column',
        marginTop:0,
        backgroundColor: 'skyblue',
    },
    dateItem:{
        
        color:'black',
        fontWeight: 'light',
        fontSize:17,
        marginVertical: 12, // Espacio vertical entre cada elemento de fecha
        marginLeft:10,
    },
    tempItem:{
        color:'black',
        fontWeight: 'light',
        fontSize:17,
        marginVertical: 12, // Espacio vertical entre cada elemento de fecha
        marginRight:10,
        marginLeft:10,
    },
    imgItemCard:{
        height: 50, 
        width: 50 
    }

});

export const colores={
    color1: '#9da4c4',
    color2: '#8189a8' ,
    color3: '#666e8b',
    color4: '#4a526f',
    color5: '#2f3752'
}