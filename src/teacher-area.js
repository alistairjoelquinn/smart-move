import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import Uploader from './uploader-modal'
import { useDispatch, useSelector } from 'react-redux'
import { showTeacherUpload } from './actions'

export default function TeacherArea() {
    const dispatch = useDispatch();
    const showUploader = useSelector(state => 
        state.showUploader && state.showUploader
    );
    const showUploadModal = () => {
        dispatch(showTeacherUpload());
    }


    return (
        <React.Fragment>
            <Link id="game-link" to="/game-app">🏁</Link>
            <a id="logout-button" href="/logout">Log out</a>
            <div className="main-logo-welcome">
                <p id="smart-move">smart move</p>
                <p>Welcome to the teacher area!</p>
                <div onClick={showUploadModal}>Click here to upload a new image for the game board!</div>
            </div>
            {showUploader && <Uploader />}
        </React.Fragment>
    )
}
