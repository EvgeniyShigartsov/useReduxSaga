import React from 'react'
import { Posts } from './components/Posts/posts'

function App() {
  const mockPosts = [
    {
      title: 'some title',
      id: 1
    }
  ]

  return (
    <div className="app">
      Hello world
      <Posts posts={mockPosts} />
    </div>
  );
}

export default App;
