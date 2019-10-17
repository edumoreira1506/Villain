import React from 'react'
import ReactDOM from 'react-dom'

// Remplace path with build
import Villain from '../src/index.js'
import '../src/css/styles.css'

const villainOpts = {
  workerPath: '/build/worker-bundle.js',
  allowFullScreen: false,
}

const testFile = '/build/test_files/archive.cbz'
const testFile2 = '/build/testFiles/Example-archive.zip'

ReactDOM.render(
  <div>
    <h1> Test example! </h1>
    <Villain file={testFile2} options={villainOpts} />
  </div>,
  document.getElementById('app')
)
