import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { useState, useEffect } from 'react';

export default function Todo() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch('https://nztodo.herokuapp.com/api/tasks/?format=json')
      .then(response => response.json())
      .then(json => setTasks(json));
  }, [])

  return (
    <List>
      {
        tasks.map((task: any) => (
          <ListItem key={task.id}>
            <ListItemText primary={task.title} secondary={task.description} />
          </ListItem>
        ))
      }
    </List>
  )
}
