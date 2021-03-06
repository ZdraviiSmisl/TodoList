import React from 'react';
import PropTypes from 'prop-types';
import style from './TodoListTask.module.css';

class TodoListTask extends React.Component {
    state = {
        editMode: false
    };
    onIsDoneChanged = (e) => {

        this.props.changeStatus(this.props.task.id, e.currentTarget.checked);
    };
    activatedEditMode = () => {
        this.setState({editMode: true})
    };
    deactivatedEditMode = () => {
        this.setState({editMode: true})
    };
    onTitleChanged = (e) => {
        this.props.changeTitle(this.props.task.id, e.currentTarget.value);
    };
    clickForDel = () => {
        this.props.removeTask(this.props.task.id);
    };

    render() {
        let taskClass = this.props.task.isDone ? style.todoListTask + '' + style.done : style.todoListTask;
        return (
            <div className={taskClass}>
                <input type='checkbox'
                       checked={this.props.task.isDone}
                       onChange={this.onIsDoneChanged}
                />
                {this.state.editMode ?
                    <input/> : <span onClick={this.activatedEditMode}
                                     autofocus={true}
                                     onBlur={this.deactivatedEditMode}
                                     onChange={this.onTitleChanged}>{this.props.task.id} :{this.props.task.title},</span>

                }


                <span> priority:{this.props.task.priority}</span>
                <span><button onClick={this.clickForDel}>Del</button></span>

            </div>


        );
    }
}

export default TodoListTask;

TodoListTask.propTypes = {
    tasks: PropTypes.string,
    isDone: PropTypes.bool,
    priority: PropTypes.string
};