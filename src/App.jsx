import React from 'react';
import TodoList from  './Components/TodoList/TodoList';
import style from './App.module.css'
class App extends React.Component {

    render = () => {

        return (

            <div className={style.App}>
        <TodoList/>
            </div>


    )
        ;
    };
}

export default App;

