import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import './App.css';
import {TaskItem, AddTaskForm} from './Components/taskitem'
import trash from './trash-e.png'

class App extends Component {
  constructor(props) {
        super();
        this.next_id = 4
    }

    state = {
        films: [{id: 1, text: 'Hulk'},
            {id: 2, text: 'Iron man'},
            {id: 3, text: 'Ant-man'},
        ],
        current_name: '',

    };

    loadFromLocalStorage=()=>{
        let value=localStorage.getItem('films')
        let films=JSON.parse(value)
        this.setState({films:films})
    }

    componentDidMount() {
        this.loadFromLocalStorage()
    }

    changeEditText=(event,id)=>{
        let value = event.target.value;
        let filmId = this.state.films.findIndex(film => {
            return film.id === id;
        });
        let film=this.state.films[filmId]
        film.text=value
        let state=[...this.state.films]
        state[filmId]=film
        this.setState({films:state})
        localStorage.setItem('films',JSON.stringify(state))
    }

    textChange = (event) => {
        let value = event.target.value;
        this.setState({current_name: value})

    };

    submitTask = (event) => {
        event.preventDefault();

        let film = {};
        film.id = this.next_id;
        film.text = this.state.current_name;

        this.next_id++;
        let films = [film, ...this.state.films];
        this.setState({
            ...this.state,
            films: films,
            current_name: '',
        });
        localStorage.setItem('films',JSON.stringify(films))
    };

    deleteTask = (id) => {

        let filmId = this.state.films.findIndex(film => {
            return film.id === id;
        });

        const films = [...this.state.films];
        films.splice(filmId, 1);

        this.setState({
            ...this.state,
            films: films
        });
         localStorage.setItem('films',JSON.stringify(films))
    }

    render() {

        return (
            <div className="App">
                < AddTaskForm onChange={this.textChange} onClick={this.submitTask} text={this.state.current_name}/>
                {this.state.films.map((film) => {
                    return (<TaskItem key={film.id}

                                      text={film.text}
                                      trash={trash}
                                      changeText={(event)=>this.changeEditText(event,film.id)}
                                      deleteTask={() => this.deleteTask(film.id)}
                                      />)
                })}

            </div>
        );
    }
}

export default App;
