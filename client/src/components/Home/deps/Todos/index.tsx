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
import { GET_TODOS } from "../../../../services/apollo/todo";
import { useLazyQuery } from "@apollo/client";
import styles from "./styles";

const useStyles = makeStyles(styles);

const Todos = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [getTodos, { loading, data }] = useLazyQuery(GET_TODOS);
  const user = useSelector((state: any) => state.user);
  //   const todos = useSelector((state: any) => state.todo.todos);
  const todos: any = [
    {
      id: 1,
      title: "hello",
      isDone: true,
    },
    {
      id: 2,
      title: "world",
      isDone: false,
    },
  ];

  useEffect(() => {
    getTodos({ variables: { ownerId: user.id } });
  }, [user]);

  return (
    <div>
      <List
        className={classes.todoList}
        subheader={<ListSubheader>All todos:</ListSubheader>}
        dense
      >
        {todos &&
          todos.map((todo: any) => (
            <ListItem key={todo.id}>
              <ListItemText primary={`${todo.title}`} />
              <ListItemSecondaryAction>
                <Checkbox
                  edge="end"
                  // onChange={toggleTodo}
                  checked={todo.isDone}
                />
              </ListItemSecondaryAction>
            </ListItem>
          ))}
      </List>
      {/* {data && console.log(data.getTodos)} */}
    </div>
  );
};

export default Todos;
