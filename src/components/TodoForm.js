import React, {useState, useEffect, useRef} from 'react'

const TodoForm = (props) => {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
  })

  const handleChange = e => {
    setInput(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });

    setInput('');
  }

  return (
    <form className='todo-form' onSubmit={handleSubmit}>
      { props.edit ? (
        <>
          <input
            className='todo-input edit'
            type='text'
            placeholder="Update your item"
            value={input}
            name='text'
            onChange={handleChange}
            ref={inputRef}
          />
          <button className='todo-button edit'>Add todo</button>
        </>
      ) :
      ( 
        <>
          <input
              className='todo-input'
              type='text'
              placeholder="Add a to-do"
              value={input}
              name='text'
              onChange={handleChange}
              ref={inputRef}
            />
          <button className='todo-button'>Add todo</button>
        </>
        )
      }
    </form>
  )
}

export default TodoForm