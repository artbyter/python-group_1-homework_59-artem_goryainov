import React from 'react'
import './taskitem.css'

class TaskItem extends React.Component {


    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return this.props.text!==nextProps.text
    }

    render() {

        return (
            <div className="card w-75 border border-dark m-3">

                <div className="card-body p-0">
                    <div className='container'>
                        <div className="row taskitem">
                            <div className="col-9 align-bottom">
                                <div className="d-inline-block align-baseline">
                                    <input value={this.props.text} onChange={this.props.changeText}>

                                    </input>
                                </div>
                            </div>
                            <div className="col-3 align-bottom ">

                                <p className="d-inline-block p-2 float-right">Удалить<a className="text-decoration-none"
                                                                                        href="#"
                                                                                        onClick={this.props.deleteTask}>
                                    <img
                                        className="rounded  d-inline-block " width="16" height="16"
                                        src={this.props.trash}></img></a></p>



                            </div>
                        </div>
                    </div>
                </div>
            </div>)

    }
}

class AddTaskForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };


    }

    render() {
        return (
            <form className='text-left m-3'>
                <input type='text' value={this.props.text} onChange={this.props.onChange}></input>
                <button type='submit' value='submit' onClick={this.props.onClick}>Добавить фильм</button>
            </form>
        )
    }
}

export {TaskItem, AddTaskForm}