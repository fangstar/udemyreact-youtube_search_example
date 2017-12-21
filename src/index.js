import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

// import App from './components/app';
import reducers from './reducers';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail'
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

const API_KEY = 'AIzaSyCT9DYZUJQ9bhIB5-o8Nj0WrehT6wCxw-E';




class App extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      videos: [] 
      , selectedVideo: null 
    };

    this.videoSearch("surfboards")

  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      // console.log(data);
      // this.setState({ videos });
      // this.setState({selectedVideo: videos[0]});
      this.setState({
        videos: videos
        ,selectedVideo: videos[0]
      });
    });    
  }

  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) },300);

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList 
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} 
        />
      </div>
    );
  }
}

ReactDOM.render(
  <App />
  , document.querySelector('.container')
);

// const createStoreWithMiddleware = applyMiddleware()(createStore);

// ReactDOM.render(
//   <Provider store={createStoreWithMiddleware(reducers)}>
//     <App />
//   </Provider>
//   , document.querySelector('.container'));
