import React, { memo } from 'react';

const Input = memo(props => {
  const inputRef = React.createRef();

  const addHabit = () => {
    const name = inputRef.current.value
    name && props.onAddHabit(name);
    inputRef.current.value = '';
    inputRef.current.focus();
  }

  return (
    <>
      <input 
        type="text"
        className="add-input"
        placeholder="Habit"
        ref={inputRef}/>
      <button className="add-button" onClick={addHabit}>Add</button>
    </>
  )
});

export default Input;