import React from 'react';
import SearchBar from './SearchBar'
import youtube from '../apis/youtube'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail';

//youtube data api key
const KEY = "AIzaSyAqR9pRMHcSWmLIZq3QpJ6p3yl5vGjgGJs";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {videos: [], selectedVideo: null};
    }
    handleTermSubmit = async term => {
        const response = await youtube.get( './search', {
            params: {
                part: "snippet",
                maxResults: 5,
                type: 'video',
                q: term,
                key: KEY
            }
        });
        this.setState({videos: response.data.items});
    };

    onVideoSelect = video => {
        this.setState({selectedVideo: video});
    }

    
    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.handleTermSubmit}/>
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo}/>
                        </div>
                        <div className="three wide column">
                            <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default App;