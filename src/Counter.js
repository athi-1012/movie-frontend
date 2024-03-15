import React from 'react'
import { useState } from 'react'
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';

export default function Counter() {
    let[like,setlike]=useState(0);
    let[dislike,setdislike]=useState(0);
    const incrementLike=()=>setlike(like+1);
    const incrementDislike=()=>setdislike(dislike+1);

  return (
    <div className='counter'>
    <IconButton aria-label="Like" color="secondary" onClick={incrementLike}>
    <Badge badgeContent={like} color="secondary">
    👍
    </Badge>
    </IconButton>
    <IconButton aria-label="disLike" color="error" onClick={incrementDislike}>
    <Badge badgeContent={dislike} color="error">
    👎
    </Badge>
    </IconButton>
    </div>
  )
}
