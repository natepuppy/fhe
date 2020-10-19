import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import DeleteIcon from "@material-ui/icons/Delete";

import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
   
   
   
   
   
   
const [new_task, setNewTask] = useState("");
const [taskID, setTaskID] = useState("");

   
   
   
   
   
   
   
   
   // const handleAddTask = () => {
    //     db.collection("users")
    //       .doc(user.uid)
    //       .collection("tasks")
    //       .add({ text: new_task, checked: false, priority: null })
    //       .then(() => {
    //         setNewTask("");
    //         // setPriority("");
    //       });
    //   };
  // const handleDeleteTask = task_id => {
  //   db.collection("users")
  //     .doc(user.uid)
  //     .collection("tasks")
  //     .doc(task_id)
  //     .delete();
  //   handleClose();
  // };
  // const handleCheckTask = (checked, task_id) => {
  //   db.collection("users")
  //     .doc(user.uid)
  //     .collection("tasks")
  //     .doc(task_id)
  //     .update({ checked: checked });
  // };
  // const handleNewPriority = (priority, task_id) => {
  //   db.collection("users")
  //     .doc(user.uid)
  //     .collection("tasks")
  //     .doc(task_id)
  //     .update({ priority: priority });
  // };
  // const handleClickOpen = taskID => {
  //   setTaskID(taskID);
  //   setOpen(true);
  // };


//   const handleClose = () => {
//     setOpen(false);
//   };







// return (
//   <div>
//     <AppBarComponent/>
//     <div style={{ display: "flex", marginTop: 30, flexDirection: "column", alignItems: "center" }}>
//     {events.map(events => {
//       return <EventList user = {user} events = {events}/>
//     })}
//     </div>
//     <div style={{ display: "flex", justifyContent: "center", marginTop: 30 }}>
      
//       <Paper style={{ width: 700, padding: 30 }}>
//         <Typography variant="h6">To Do List</Typography>
//         <div style={{ display: "flex", marginTop: 30 }}>
//           <TextField
//             style={{ marginRight: 30 }}
//             fullWidth={true}
//             placeholder="Add a new task here"
//             value={new_task}
//             onChange={e => {
//               setNewTask(e.target.value);
//             }}
//           />
//           <Button
//             variant="contained"
//             color="primary"
//             onClick={handleAddTask}
//             disabled={new_task === ""}
//           >
//             ADD
//           </Button>
//         </div>
//         <List style={{ MarginTop: 30 }} subheader={<li />}>
//           {tasks.filter(value => value.checked === false).length > 0
//             ? "Incomplete Tasks"
//             : ""}
//           {tasks
//             .filter(value => value.checked === false)
//             .map(value => {
//               return (
//                 <ListItem key={value.id} disabled={false}>
//                   <ListItemIcon>
//                     <Checkbox
//                       edge="start"
//                       checked={value.checked}
//                       onChange={e => {
//                         handleCheckTask(e.target.checked, value.id);
//                       }}
//                     />
//                   </ListItemIcon>
//                   <ListItemText primary={value.text} />
//                   <ListItemSecondaryAction>
//                     <FormControl style={{ width: 90 }}>
//                       <InputLabel shrink={value.priority !== null}>
//                         Priority
//                       </InputLabel>
//                       <Select
//                         value={value.priority}
//                         onChange={e => {
//                           handleNewPriority(e.target.value, value.id);
//                         }}
//                       >
//                         <MenuItem value={1}>Low</MenuItem>
//                         <MenuItem value={2}>Mid</MenuItem>
//                         <MenuItem value={3}>High</MenuItem>
//                       </Select>
//                     </FormControl>

//                     <IconButton
//                       onClick={() => {
//                         handleClickOpen(value.id);
//                       }}
//                     >
//                       <DeleteIcon />
//                     </IconButton>
//                   </ListItemSecondaryAction>
//                 </ListItem>
//               );
//             })}
//         </List>

//         <List style={{ MarginTop: 30 }} subheader={<li />}>
//           {tasks.filter(value => value.checked === true).length > 0
//             ? "Complete Tasks"
//             : ""}
//           {tasks
//             .filter(value => value.checked === true)
//             .map(value => {
//               return (
//                 <ListItem key={value.id} disabled={false}>
//                   <ListItemIcon>
//                     <Checkbox
//                       edge="start"
//                       checked={value.checked}
//                       onChange={e => {
//                         handleCheckTask(e.target.checked, value.id);
//                       }}
//                     />
//                   </ListItemIcon>
//                   <ListItemText primary={value.text} />
//                   <ListItemSecondaryAction>
//                     <FormControl style={{ width: 90 }}>
//                       <InputLabel>Priority</InputLabel>
//                       <Select
//                         value={value.priority}
//                         onChange={e => {
//                           handleNewPriority(e.target.value, value.id);
//                         }}
//                       >
//                         <MenuItem value={1}>Low</MenuItem>
//                         <MenuItem value={2}>Mid</MenuItem>
//                         <MenuItem value={3}>High</MenuItem>
//                       </Select>
//                     </FormControl>

//                     <IconButton
//                       onClick={() => {
//                         handleClickOpen(value.id);
//                       }}
//                     >
//                       <DeleteIcon />
//                     </IconButton>
//                   </ListItemSecondaryAction>
//                 </ListItem>
//               );
//             })}
//         </List>
//       </Paper>

//     </div>
//     <Dialog open={open} onClose={handleClose}>
//       <DialogTitle>
//         {"Are you sure you want to delete this task?"}
//       </DialogTitle>
//       <DialogActions>
//         <Button onClick={handleClose} color="primary">
//           Cancel
//         </Button>
//         <Button
//           onClick={() => {
//             handleDeleteTask(taskID);
//           }}
//           color="primary"
//           autoFocus
//         >
//           Delete
//         </Button>
//       </DialogActions>
//     </Dialog>
    
//   </div>
// );



































import React, { useState, useEffect } from "react";

import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import { db } from "../firebase";




    const [open, setOpen] = useState(false);
    const [taskID, setTaskID] = useState("");
    const [new_RSVP, setNewRSVP] = useState("");