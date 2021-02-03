import React, { useEffect, useState } from "react";
import { makeStyles, Button } from "@material-ui/core";
import { useSelector } from "react-redux";
import { List, ListSubheader } from "@material-ui/core";
import TodoItem from "../TodoItem";
import { Todo } from "@store/types";
import {
  GET_TODOS,
  GET_LOCAL_TODOS,
  todosVar,
  todoListControllerVar,
  dropListController,
} from "@services/apollo/variables/todo";
import Modal from "@comps/generalDeps/Modal";
import clsx from "clsx";
import { useLazyQuery, useQuery, useReactiveVar } from "@apollo/client";
import styles from "./styles";

const useStyles = makeStyles(styles);

const Todos = () => {
  const { data: testTodos } = useQuery(GET_LOCAL_TODOS);
  const tdLC = useReactiveVar(todoListControllerVar);
  const classes = useStyles();
  const [
    getTodos,
    { loading: todosAreloading, data: remoteTodos },
  ] = useLazyQuery(GET_TODOS);
  const [isAddTodoModalOpen, setAddTodoModalState] = useState<boolean>(false);
  const user = useSelector((state: any) => state.user);

  const showCurrent = () =>
    todoListControllerVar({ ...dropListController, current: true });

  const showFinished = () =>
    todoListControllerVar({ ...dropListController, finished: true });

  const showAll = () =>
    todoListControllerVar({ ...dropListController, all: true });

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
        subheader={
          <ListSubheader className={classes.listSubHeader}>
            <div>
              <Button
                className={clsx({ [classes.activeCategoryBtn]: tdLC.current })}
                color="primary"
                onClick={showCurrent}
              >
                Current
              </Button>
              <Button
                className={clsx({ [classes.activeCategoryBtn]: tdLC.finished })}
                color="primary"
                onClick={showFinished}
              >
                Finished
              </Button>
              <Button
                className={clsx({ [classes.activeCategoryBtn]: tdLC.all })}
                color="primary"
                onClick={showAll}
              >
                All
              </Button>
            </div>
            <div>
              <Button
                variant="contained"
                color="primary"
                onClick={() => setAddTodoModalState(true)}
              >
                Add
              </Button>
              <Modal
                open={isAddTodoModalOpen}
                onClose={() => setAddTodoModalState(false)}
              />
            </div>
          </ListSubheader>
        }
        dense
      >
        {remoteTodos &&
          remoteTodos.getTodos.map((todo: Todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
      </List>
    </div>
  );
};

export default Todos;
