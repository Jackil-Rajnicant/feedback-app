import React from 'react'
import { useState } from 'react'
import Card from './shared/Card';
import PropTypes from 'prop-types'
import { FaTimes, FaEdit } from 'react-icons/fa'
import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

export default function FeedbackItem({item}) {

    const [rating, setRating] = useState(7);
    const [text, setText] = useState('This is an example of the feedback item.')
    const { deleteFeedback, editFeedback } = useContext(FeedbackContext)

    return (
        <Card reverse={false}>
            <div className='num-display'>{item.rating}</div>
            <button onClick={() => deleteFeedback(item.id)} className='close'>
                <FaTimes color='purple'/>
            </button>
            <button onClick={() => editFeedback(item)}className='edit'>
                <FaEdit color='purple'/>
            </button>
            <div className='text-display'>{item.text}</div>
        </Card>
    )

}

FeedbackItem.protoTypes = {
    item: PropTypes.object.isRequired,
}


