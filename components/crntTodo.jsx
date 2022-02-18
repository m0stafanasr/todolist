import {View, Text, TextInput, FlatList} from 'react-native'
//import Checkbox from 'expo-checkbox'
import {Checkbox} from 'react-native-paper'
import { styles } from '../styles'
export default CrntTodo = ({list,changeStat})=>{

    return( 
        
        <FlatList data={list} 
        renderItem={ ({item:todo})=>(
            
            <View style={styles.todoContainer}>
                
                <Text style={styles.todoTitle && todo.done?styles.finish:{}}>{todo.title}</Text> 
                <Checkbox  
                status={todo.done?"checked":"unchecked"} 
                style={styles.checker}
                 onPress={()=>changeStat(todo)}/>
            </View>
        )}
        keyExtractor={(item,i)=>`${i}`}
        ListHeaderComponent={<Text style={styles.headerStyle}>{`${list.filter(i=>!i.done).length} are not finished of ${list.length}`} </Text>}
    />
    )

}