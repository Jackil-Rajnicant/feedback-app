import React, { useState } from "react";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import Header from "./components/Header";
import FeedbackData from "./data/FeedbackData";
import FeedbackForm from "./components/FeedbackForm";
import About from "./pages/About";
import AboutIconLink from './components/AboutIconLink'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { FeedbackProvider } from "./context/FeedbackContext";

function App() {

    const [feedback, setFeeback] = useState(FeedbackData);

    return (
        <FeedbackProvider>
            <Router>
                <Header />
                <div className='container'>
                    <Routes>
                        <Route exact path='/' element={
                            <>
                                <FeedbackForm />
                                <FeedbackStats />
                                <FeedbackList />
                            </>
                        }> 
                        </Route>
                        <Route path='/about' element={<About />}/>
                    </Routes>
                    <AboutIconLink />
                </div>
            </Router>
        </FeedbackProvider>
    )
}

export default App