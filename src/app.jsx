import './app.css';
import React, { Component } from 'react';
import Habits from './components/habits';
import Navbar from './components/navbar';

class App extends Component {
  state = {
    habits: [
      { id: 1, name: 'Reading', count: 0 },
      { id: 2, name: 'Runnig', count: 0 },
      { id: 3, name: 'Coding', count: 0 }
    ]
  }
  
  handleTotalCount = () => {
    const count = this.state.habits.filter(item => item.count > 0).length;
    return count
  }

  addHabit = (name) => {
    const habits = [...this.state.habits, {id: Date.now(), name, count: 0}];
    this.setState({habits})
  }

  handleIncrement = (habit) => {
    const habits = this.state.habits.map(item => {
      if(item.id === habit.id) {
        return {...habit, count: habit.count + 1}
      } else {
        return item
      }
    });
    this.setState({habits})
  }

  handleDecrement = (habit) => {
    const habits = this.state.habits.map(item => {
      if(item.id === habit.id) {
        const count = habit.count - 1;
        return {...habit, count: count < 0 ? 0 : count}
      } else {
        return item
      }
    });
    this.setState({habits})
  }

  handleDelete = (habit) => {
    const habits = this.state.habits.filter(item => item !== habit)
    this.setState({habits})
  }

  handleReset = () => {
    const habits = this.state.habits.map(item => {
      if(item.count !== 0) {
        return {...item, count: 0}
      }
      return item
    })
    this.setState({habits})
  }

  render() {
    return (
      <>
        <Navbar
          totalCount={this.handleTotalCount()}
        />
        <Habits 
          habits={[...this.state.habits]}
          onAddHabit={this.addHabit}
          onIncrement={this.handleIncrement} 
          onDecrement={this.handleDecrement} 
          onDelete={this.handleDelete}
        />
        <button className="habits-reset" onClick={this.handleReset}>Reset All</button>
      </>
    );
  }
}

export default App;
