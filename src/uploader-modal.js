import React, { Component } from 'react';

export default class Uploader extends Component {
    constructor(props){
        super(props);
        this.state = {
            file: null,
            selected: null
        };
    }
    componentDidMount() {
        console.log("uploader was mounted");
    }
    fileSelected({ target }) {
        this.setState({
            file: target.files[0],
            selected: true
        });
        console.log("file was uploaded");
        
    }
    render() {
        return (
            <div id="upload-container">
                <p>Choose a new profile pic...</p>
                <input id="browse" type="file" name="file" accept="image/*"  onChange={(e) => this.fileSelected(e)} />
                <label htmlFor="browse" id="upload-label">Choose a file</label>
                <button id="upload-button" onClick={() => this.props.sendImage(this.state.file)} >Upload</button>
                <button id="close-upload" onClick={() => this.props.toggleModal()} >Exit</button>
                {this.state.selected && <p id="file-selected">File Selected!</p>}
            </div>
        );
    }
}