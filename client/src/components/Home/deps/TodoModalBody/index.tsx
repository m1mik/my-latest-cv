import React, { useState } from "react";
import {
  makeStyles,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  TextField,
} from "@material-ui/core";
import styles from "./styles";
const useStyles = makeStyles(styles);

const TodoModalBody = ({ addTodo }: { addTodo: Function }) => {
  const classes = useStyles();
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  return (
    <>
      <DialogContent>
        <DialogContentText>
          <TextField
            value={title}
            onChange={(event: any) => setTitle(event.target.value)}
            placeholder="text"
            fullWidth
            required
          />
          <TextField
            value={description}
            onChange={(event: any) => setDescription(event.target.value)}
            placeholder="link"
            fullWidth
          />
        </DialogContentText>
        <DialogActions>
          <Button onClick={() => addTodo(title, description)}>Add</Button>
        </DialogActions>
      </DialogContent>
    </>
  );
};

export default TodoModalBody;
