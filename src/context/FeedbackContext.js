import { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {

    const [feedback, setFeeback] = useState([
        {
            id: 1, 
            text: 'This feedback item 1',
            rating: 9 
        },
        {
            id: 2, 
            text: 'This feedback item 2',
            rating: 6 
        },
        {
            id: 3, 
            text: 'This feedback item 3',
            rating: 10 
        },
    ])
    
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4();
        setFeeback([newFeedback, ...feedback])
    }

    const deleteFeedback = (id) => {
        if(window.confirm('Are you sure you want to delete?')){
            setFeeback(feedback.filter((item) => item.id !== id));
        }
    }

    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true 
        })
    }

    const updateFeedback = (id, updItem) => {
        setFeeback(feedback.map((item)=>item.id === id ? {...item,...updItem} : item))
    }

    return <FeedbackContext.Provider value={{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedback,
        setFeedbackEdit
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext