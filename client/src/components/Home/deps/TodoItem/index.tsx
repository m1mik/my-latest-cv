import React, { useState } from "react";
import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Checkbox,
  IconButton,
  makeStyles,
} from "@material-ui/core";
import {
  TOGGLE_TODO,
  todoListControllerVar,
} from "@services/apollo/variables/todo";
import ArrowDropDownCircle from "@material-ui/icons/ArrowDropDownCircle";
import { useMutation } from "@apollo/client";
import { Todo } from "@store/types";
import clsx from "clsx";
import styles from "./styles";
const useStyles = makeStyles(styles);

interface TodoItemProps {
  todo: Todo;
}

const TodoItem = ({ todo }: TodoItemProps) => {
  const classes = useStyles();
  const [arrowDown, setArrowState] = useState<boolean>(false);

  const isTodoVisible = (todo: Todo) => {
    if (todoListControllerVar().current && !todo.isDone) return true;
    else if (todoListControllerVar().finished && todo.isDone) return true;
    else if (todoListControllerVar().all) return true;
    else return false;
  };

  const [runToggleTodoMutation, { data: toggledTodo }] = useMutation(
    TOGGLE_TODO
  );

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

  return isTodoVisible(todo) ? (
    <ListItem
      classes={{
        root: clsx(classes.todoListItem, {
          [classes.done]: todo.isDone,
        }),
      }}
      key={todo.id}
    >
      <ListItemText
        primary={
          <div className={classes.todoItemPrimary}>
            <div>{todo.title}</div>
          </div>
        }
        secondary={arrowDown && todo.description}
      />
      <ListItemSecondaryAction>
        <IconButton onClick={() => setArrowState(!arrowDown)}>
          <ArrowDropDownCircle
            className={clsx(classes.todoDescriptionArrow, {
              [classes.todoDescriptionExpanded]: arrowDown,
            })}
          />
        </IconButton>
        <Checkbox
          edge="end"
          onChange={toggleTodo(todo.id)}
          checked={todo.isDone}
        />
      </ListItemSecondaryAction>
    </ListItem>
  ) : null;
};

export default TodoItem;
