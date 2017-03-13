import React, {Component} from 'react';
import { Link } from 'react-router';
import Form from './Form'; 

export default class AppContainer extends Component {

  constructor(props){
    super(props)
  }
    
  render(){
    return(
      <div>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <Link className="navbar-brand" to="/">Markdown to HTML Converter</Link> 
            </div>
            <ul className="nav navbar-nav">
              <li><a href="https://github.com/elliette/markdown-to-html-converter">github</a></li>
              <li><a href="https://www.npmjs.com/package/markdown-to-html-converter">npm</a></li>
            </ul>
          </div>
        </nav>
        <div className="container">
          <Form /> 
        </div>
          <div className="footer"><strong>Markdown to HTML Converter</strong> by Elliott Brooks</div> 
      </div>
    );
  }
}
