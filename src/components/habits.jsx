import React, { Component } from 'react';
import Habit from './habit';
import Input from './input';

class Habits extends Component {
  render() {
    return (
      <ul className="habits">
        <Input
          onAddHabit={this.props.onAddHabit}/>
        {this.props.habits.map(habit => (
            <Habit
              key={habit.id} 
              habit={habit} 
              onIncrement={this.props.onIncrement} 
              onDecrement={this.props.onDecrement} 
              onDelete={this.props.onDelete}/>
        ))}
      </ul>
    )
  }
}

export default Habits;