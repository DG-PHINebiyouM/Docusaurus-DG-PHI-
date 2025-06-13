import React, {useEffect, useRef, useState} from 'react'
import styles from './styles.module.css'

export default function CustomTab(){

    const[input, setInput] = useState('')
    const[outputtext, setOutputtext] = useState('')
    const[counter, setCounter] = useState(1)
    const[comments, setComments] = useState([])
    
    /*
    Input only one comment
    const handleClick = () => {
        setOutputtext(`You entered ${input}`) 

    }
        */
    
    
    
    const addComment = () => {
        setComments([...comments, `Comment: ${input}`])
        setCounter(counter + 1)
        

        
    };
    
    

    return (
        
        <form>
        <input 
            type="text" 
            value={input} 
            onChange={(e) => setInput(e.target.value)} 
            className={styles.inputCommentBox}/> 
        <button className={styles.commentButton} type="button" onClick={addComment}>Submit</button>
        <h3>Comments:</h3>
        <div>
            {comments.map((comment, index) => (
                <li key={index}>{comment}</li>
            ))}
        </div>
        
        </form>
        
        


    )


}