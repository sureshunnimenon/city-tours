import React, { Component } from 'react';
// import img from '../../images/london.jpeg';
import './Tour.scss'

export default class Tour extends Component {
  state = {
    showInfo: false
  }

  handleInfo = () => {
    this.setState({showInfo: !this.state.showInfo})
  }
  render() {
    const { id, city, img, name, info } = this.props.tour; 
    const { rmvTours } = this.props;
    return (
      <article className="tour">
         {/* Single tour */}

         <div className = "img-container">
            <img src= {img} alt="London"/>
            <span className="close-btn" onClick={()=> rmvTours(id)}> <i className="fa fa-window-close" aria-hidden="true"></i></span>
         </div>
            <div className ="tour-info">
                <h3> {city} </h3>
                <h4> {name} </h4>
                
                <h5> info <span onClick={this.handleInfo }> <i className="fa fa-caret-square-o-down" aria-hidden="true"></i></span></h5>

                {/* <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, dolorem?</p> */}
                {this.state.showInfo && <p> {info} </p>}
            </div>
         </article>
    )
  }
}
