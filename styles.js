import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    height:"100%"
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    backgroundColor: "navy",
    padding: 10,
    textAlign: "center",
    
  },
  inputContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding:5
  },
  input:{
      borderBottomColor:'navy', 
      borderBottomWidth:1,
      fontSize:16
  },
  btn:{
    backgroundColor: "navy",
    width: '40%',
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    borderRadius:12,
    
  },
  btnText:{
    color:'white',
      fontSize:18
  },
  focus:{
      flexGrow:2,
      marginRight:5
  },
  checker:{
      marginLeft:10
      
  },
  todoTitle:{
      fontSize:18,
      color:'black'
  },
  todoContainer:{
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 5,
  },
  headerStyle:{
      fontSize:22,
      textAlign:'center'
  },
  finish:{
      textDecorationLine:'line-through'
  }
});
