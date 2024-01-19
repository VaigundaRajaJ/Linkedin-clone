import React, { useEffect, useState } from 'react'
import './Feed.css'
import { CalendarViewDay, Create, EventNote, Image, Subscriptions } from '@mui/icons-material'
import InputOption from './InputOption'
import Posts from './Posts'
import { db } from './firebase'
import firebase from 'firebase/compat/app';
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'
import FlipMove from 'react-flip-move'


function Feed() {

    const [posts, setPosts] = useState([])

    const [input, setInput] = useState('')

    const user = useSelector(selectUser)


    useEffect(()=> {       
        db.collection("posts").orderBy("timestamp", "desc").onSnapshot((snapshot) => {   
            setPosts(snapshot.docs.map((doc) =>(
                {
                   id: doc.id,
                   data: doc.data(),
                }     
            ))
            )
        } )
        
    },[])

    const sendPost = (e) =>{
        e.preventDefault()
        db.collection("posts").add({
            name: user.displayName,
            description: user.email,
            message: input,
            photoUrl: '',
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),

        })
        setInput("")
    }
   


  return (
    <div className='feed'>

        <div className="feed_inputContainer">

            <div className="feed_input">
                <Create />
                <form>
                    <input value={input} onChange={(e)=> setInput(e.target.value)} type='text'/>
                    <button onClick={sendPost} type='submit'>Send</button>
                </form>
            </div>

            <div className="feed_inputOptions">
                <InputOption title='Photo' Icon={Image} color='#70B5F9'/>
                <InputOption title='Video' Icon={Subscriptions} color='#E7A33E'/>
                <InputOption title='Event' Icon={EventNote} color='#C0CBCD'/>
                <InputOption title='Write Article' Icon={CalendarViewDay} color='#7FC15E'/>
            </div>

        </div>
        
        <FlipMove>

            {posts.map(({ id, data: { name, description, message, photoUrl } })=> (
                <Posts key={id} name={name} description={description} message={message} photoUrl={photoUrl} />
            ))}

        </FlipMove>

        
    </div>
  )
}

export default Feed