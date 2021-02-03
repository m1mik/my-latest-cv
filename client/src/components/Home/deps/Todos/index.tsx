import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import { useSelector } from "react-redux";
import {
  List,
  ListSubheader,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Checkbox,
} from "@material-ui/core";
import {
  GET_TODOS,
  TOGGLE_TODO,
  GET_LOCAL_TODOS,
  todosVar,
} from "../../../../services/apollo/variables/todo";
import { useLazyQuery, useMutation, useQuery } from "@apollo/client";
import styles from "./styles";

const useStyles = makeStyles(styles);

const Todos = () => {
  const { data: testTodos } = useQuery(GET_LOCAL_TODOS);
  const classes = useStyles();
  const [
    getTodos,
    { loading: todosAreloading, data: remoteTodos },
  ] = useLazyQuery(GET_TODOS);
  const [runToggleTodoMutation, { data: toggledTodo }] = useMutation(
    TOGGLE_TODO
  );
  const user = useSelector((state: any) => state.user);

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
    if (user && !remoteTodos) getTodos({ variables: { ownerId: user.id } });
  }, [user]);

  useEffect(() => {
    if (remoteTodos && !testTodos.length) todosVar(remoteTodos.getTodos);
  }, [remoteTodos]);

  return (
    <div>
      <List
        className={classes.todoList}
        subheader={<ListSubheader>All todos:</ListSubheader>}
        dense
      >
        {remoteTodos &&
          remoteTodos.getTodos.map((todo: any) => (
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
