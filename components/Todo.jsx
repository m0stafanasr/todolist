import { useState } from 'react';
import {View, Text, TextInput, TouchableOpacity,  LayoutAnimation,
    NativeModules,} from 'react-native'
import { styles } from '../styles'
const {UIManager}=NativeModules;
UIManager.setLayoutAnimationEnabledExperimental &&
UIManager.setLayoutAnimationEnabledExperimental(true);
export default Todo = ({todoAdd})=>{

    
    const [todoTitle,setTodotitle]=useState('')
    const [focus, setFocus]=useState(false);
    const focusHandler=()=>{
        LayoutAnimation.spring()
        setFocus(true)
    }
    const blurHandler=()=>{
        LayoutAnimation.spring()
        setFocus(false);

    }

    const addHandler = ()=>{
        if(todoTitle!=''){
          let todo ={
            title:todoTitle,
            done:false
        }
        todoAdd(todo)
        setTodotitle("")     
        }else{
            alert("you have to enter a todo item")
        }
        
        
    }
    const textHandler = (text)=>{
        setTodotitle(text)
    }
    return(
    <View>
        <Text style={styles.header}>ToDo App</Text>
        <View style={styles.inputContainer}>
            <TextInput onFocus={focusHandler}
             onBlur={blurHandler} onChangeText={textHandler}
              value={todoTitle} style={{...styles.input,...(focus?styles.focus:{})}}
               placeholder='enter todo item...'/>
            <TouchableOpacity style={styles.btn} onPress={addHandler}>
                <Text style={styles.btnText}>Add Todo</Text>
            </TouchableOpacity>
        </View>
    </View>
    )
}
