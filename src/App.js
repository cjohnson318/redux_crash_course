import { Provider } from 'react-redux'

import store from './store' 

import PostForm from './components/PostForm'
import Posts from './components/Posts'


function App() {
  return (
    <Provider store={store} >
      <div className="App">
        <PostForm />
        <hr/>
        <Posts />
      </div>
    </Provider>
  );
}

export default App;
