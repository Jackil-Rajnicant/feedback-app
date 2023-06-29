import React, { useState, useEffect } from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'

export default function FeedbackForm() {

    const [text, setText] = useState('')
    const [btnDisable, setBtnDisable] = useState(true)
    const [message, setMessage] = useState('')
    const [rating, setRating] = useState()

    const { addFeedback, feedbackEdit, updateFeedback, setFeedbackEdit} = useContext(FeedbackContext)

    useEffect(() => {
        if(feedbackEdit.edit === true){
            setBtnDisable(false)
            setText(feedbackEdit.item.text)
            setRating(feedbackEdit.item.rating)
        } 
    },[feedbackEdit]);

    const handleTextChange = (e) => {
        if(text === ''){
            setBtnDisable(true);
            setMessage(null)
        } else if (text !== null && text.trim().length <= 10){
            setBtnDisable(true);
            setMessage('Text must be at least 10 characters!')
        } else {
            setBtnDisable(false);
            setMessage(null)
        }
        setText(e.target.value)
    }


    const handleSubmit = (e) => {
        e.preventDefault()

        if(rating === null || rating === undefined) {
            setMessage('Please select a rating')
        } else {
            if(text.trim().length > 10){
                const newFeedback = {
                    text: text,
                    rating: rating,
                }

                if(feedbackEdit.edit === true){
                    updateFeedback(feedbackEdit.item.id, newFeedback)
                }else{
                    addFeedback(newFeedback)
                }
                setText('')
                setMessage('')
                setFeedbackEdit({
                    item: {},
                    edit: false
                })
            }
        }
    }


  return (
    <Card>
        <form onSubmit={handleSubmit}> 
            <h2>How would you rate your service with us?</h2>
            <RatingSelect select={setRating} selected={rating} />
            <div className='input-group'>
                <input
                    onChange={handleTextChange} 
                    type='text' 
                    placeholder='Write a review'
                    value={text}/>
                <Button type='submit' isDisabled={btnDisable}>Send</Button>
            </div>
            {message && <div className='message'>{message}</div>}
        </form>
    </Card>
  )
}
