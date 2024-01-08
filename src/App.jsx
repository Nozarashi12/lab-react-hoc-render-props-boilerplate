import './App.css';
import LikeImage from './components/normal/LikeImage';
import LikePost from './components/normal/LikePost';
import LikeimageUsingHOC from './components/WithUsingHOC/LikeimageUsingHOC'
import Likeposthoc from './components/WithUsingHOC/LikeimageUsingHOC'
import LikeImageUsingProps from './components/usingprops/LikeImageUsingProps';
import LikePostUsingProps from './components/usingprops/LikePostUsingProps'


function App() {
  return (
    <div>
      <h1>Blog</h1>
      <div className='buttons'>
        <LikePost/>
        <LikeImage/>
      </div>
      <h1>Blog Using HOC</h1>
      <div className='buttons'>
        <Likeposthoc/>
        <LikeimageUsingHOC/>
      </div>
      <h1>Blog Using Props</h1>
      <div className='buttons'>
        <LikeImageUsingProps/>
        <LikePostUsingProps/>
      </div>
    </div>
  );
}

export default App;