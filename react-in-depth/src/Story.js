import React, { Component } from 'react';

class PhotoStory extends Component {
    render() {
        return (
            <h3>PhotoStory</h3>
        );
    }
}

class VideoStory extends Component {
    render() {
        return (
            <h3>VideoStory</h3>
        );
    }
}

var Story = {
    PhotoStory: PhotoStory,
    VideoStory: VideoStory
}

module.exports = Story;