import { Button, TextField, Checkbox } from "@mui/material"
import { ContentContainer, HeaderTitle, MainContainer, TodoListContainer } from "./style"
import { useState } from "react";
import { ITodoList } from "../../interfaces/ITodoList";

export const TodoList = () => {

  const [todoList, setTodoList] = useState<Array<ITodoList>>([]);
  const [todo, setTodo] = useState('');
  const [todoIndex, setTodoIndex] = useState(0);

  const handleTodo = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(event.target.value);
  }

  const addTodo = () => {
    const newTodo: ITodoList  = {
      id: todoIndex,
      todo: todo,
      checked: false,
    }

    setTodoList([...todoList, newTodo]);
    setTodoIndex(todoIndex + 1);
    setTodo('');
  }

  const deleteItems = () => {
    setTodoList((prevTodoList) => prevTodoList.filter(item => !item.checked));
  }

  const handleChecked = (id: number) => {
    setTodoList((prevTodoList) => 
      prevTodoList.map(item => 
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    )
  }

  return (
    <MainContainer>
      <div>
        <HeaderTitle>
          <h1>TODO LIST</h1>
        </HeaderTitle>

        <ContentContainer>
          <TextField 
            label="Nova tarefa" 
            color="secondary" 
            focused 
            sx={{ input: { color: 'white' } }} 
            value={todo}
            onChange={handleTodo}
          />
          <Button 
            variant="contained" 
            color="secondary"
            onClick={addTodo}>
              Add
          </Button>
          { todoList.some(todo => todo.checked) &&
            <Button
              variant="contained"
              color="secondary"
              onClick={deleteItems}>
                Remove
            </Button>
          }
        </ContentContainer>

        <TodoListContainer>
          <table>
            <thead>
              <th>Id</th>
              <th>Todo</th>
              <th>Complete</th>
            </thead>
            <tbody>
              {
                todoList.map(todo => (
                  <tr key={todo.id}>
                    <td className={todo.checked ? 'checked-item' : ''}>{todo.id}</td>
                    <td className={todo.checked ? 'checked-item' : ''}>{todo.todo}</td>
                    <td>
                      <Checkbox 
                        checked={todo.checked}
                        onChange={() => handleChecked(todo.id)}
                      />
                      </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </TodoListContainer>
      </div>
    </MainContainer>
  )
}