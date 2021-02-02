import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import {
  List,
  ListSubheader,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Checkbox,
} from "@material-ui/core";
import { saveFetchedTodos } from "../../../../store/actions/todo";
import { GET_TODOS, TOGGLE_TODO } from "../../../../services/apollo/todo";
import { useLazyQuery, useMutation } from "@apollo/client";
import styles from "./styles";

const useStyles = makeStyles(styles);

const Todos = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [getTodos, { loading: todosAreloading, data: todos }] = useLazyQuery(
    GET_TODOS
  );
  const [runToggleTodoMutation, { data: toggledTodo }] = useMutation(
    TOGGLE_TODO
  );
  const user = useSelector((state: any) => state.user);
  const storedTodos = useSelector((state: any) => state.todo.todos);

  const toggleTodo = (todoId: string) => (
    event: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => {
    runToggleTodoMutation({
      variables: {
        id: todoId,
      },
    });
  };

  useEffect(() => {
    getTodos({ variables: { ownerId: user.id } });
  }, [user]);

  useEffect(() => {
    if (!storedTodos.length && todos && todos.getTodos.length)
      dispatch(saveFetchedTodos(todos.getTodos));
  }, [storedTodos, dispatch]);

  return (
    <div>
      <List
        className={classes.todoList}
        subheader={<ListSubheader>All todos:</ListSubheader>}
        dense
      >
        {todos &&
          todos.getTodos.map((todo: any) => (
            <ListItem key={todo.id}>
              <ListItemText primary={`${todo.title}`} />
              <ListItemSecondaryAction>
                <Checkbox
                  edge="end"
                  onChange={toggleTodo(todo.id)}
                  checked={todo.isDone}
                />
              </ListItemSecondaryAction>
            </ListItem>
          ))}
      </List>
    </div>
  );
};

export default Todos;
