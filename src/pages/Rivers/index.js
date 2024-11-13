// Could not get to work.
// The url is correct and when typed into the browser it returns an xml file
// An error occurs requiring the installation of several polyfil node packages
// node packages installed were "timers", "string_decoder", "buffer", and "stream"

// polyfils were added into the "resolve" object in webpack.common as:
//  resolve: {
//   fallback: {
//     "timers": require.resolve("timers-browserify"),
//     "string_decoder": require.resolve("string_decoder/"),
//     "buffer": false,
//     "stream": require.resolve("stream-browserify")
//   }
// }

// this only resulted in a huge long array of who knows what.
// node packages are not currently installed

import React, { useState, useEffect } from 'react'
import { parseString } from 'xml2js'
import { urlPathBuild } from './river_data_sites'

export default function Rivers() {
  const [riverData, setRiverData] = useState([])
  useEffect(() => {
    const url = urlPathBuild()
    fetch(url)
    .then(response => response.text())
    .then(data => {
      setRiverData(() => parseString(data))
    })
  })

  return (
    <>
      <div>
      <h1>Rivers</h1>
      </div>
    </>
  )
}