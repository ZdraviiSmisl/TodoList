import React from 'react';
import style from './TodoListHeader.module.css'

class TodoListHeader extends React.Component {
    state = {
        error: false,
        title: '',
        inputEmptyDisable: false
    };
    onAddTaskClick = () => {
        let newTitle = this.state.title !== '' ? this.state.title : this.setState({inputEmptyDisable: true});
        this.state.title = '';
        if (newTitle === '') {
            this.setState({error: true})
        } else {
            this.setState({error: false});
            this.props.addTask(newTitle);
        }
    };
    onAddText = (e) => {
        this.setState({error: false, title: e.currentTarget.value, inputEmptyDisable: false});

    };

    onPressEnter = (e) => {
        if (e.key === 'Enter') alert('ты клацнул по Enter');

    };

    render = () => {

        return (

            <div className={style.todoListHeader}>
                <h3 className={style.todoListHeaderTitle}>What to Learn</h3>
                <div className={style.todoListNewTaskForm}>
                    <input onKeyPress={this.onPressEnter}
                           onChange={this.onAddText}
                           className={this.state.error ? style.error : ''}
                           type="text"
                           placeholder="New task name"
                           value={this.state.title}/>
                    <button onClick={this.onAddTaskClick} disabled={this.state.inputEmptyDisable}>Add</button>

                </div>
            </div>

        );
    }
}

export default TodoListHeader;

