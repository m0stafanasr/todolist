import { StatusBar, Text, View } from 'react-native';
import CrntTodo from './components/crntTodo';
import Todo from './components/Todo';
import { styles } from './styles';
import { useState } from 'react';
export default function App() {


  const [Ttodo,setTodo]= useState([

  ])
  const addingHandler=(obj)=>{
    setTodo([obj,...Ttodo]);
  }

    const changeStat=(todo)=>{
      let update = Ttodo.map((i) => {
        if (i === todo) {
          i.done = !i.done;
        }
        return i;
      });
      setTodo(update)
    }
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Todo todoAdd={addingHandler} />
      <CrntTodo list={Ttodo} changeStat={changeStat}/>
      
    </View>
  );
}

