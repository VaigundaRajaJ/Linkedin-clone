import React, { forwardRef } from 'react'
import './Posts.css'
import { Avatar } from '@mui/material'
import InputOption from './InputOption'
import { ChatOutlined, SendOutlined, ShareOutlined, ThumbUpAltOutlined } from '@mui/icons-material'


const Posts  = forwardRef(({name, description, message, photoUrl}, ref) => {

  



  return (
    <div ref={ref} className='posts'>

        <div className="posts_header">
            <Avatar>{name[0]}</Avatar>

            <div className="posts_info">
                <h2>{name}</h2>
                <p>{description}</p>
            </div>

        </div>

        <div className="posts_body">
            <p>{message}</p>
        </div>

        <div className="posts_buttons">
          <InputOption Icon={ThumbUpAltOutlined} title='Like' color='gray' />
          <InputOption Icon={ChatOutlined} title='Comment' color='gray' />
          <InputOption Icon={ShareOutlined} title='Share' color='gray' />
          <InputOption Icon={SendOutlined} title='Send' color='gray' />
        </div>

    </div>
  )
})

export default Posts