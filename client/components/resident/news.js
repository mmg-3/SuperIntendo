import React, {Component} from 'react'
import {connect} from 'react-redux'
import {NewsNew} from './news-new'
class News extends Component {
  render() {
    return (
      <div>
        <button type="submit">Post Message</button>
        <NewsNew />
      </div>
    )
  }
}

const mapState = () => {}

const mapDispatch = () => {}

export default connect(mapState, mapDispatch)(News)
