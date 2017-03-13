import React, { Component } from 'react';
import {hashHistory} from "react-router";
import RawHTMLBox from "./RawHTMLBox"; 
import RenderedHTMLBox from "./RenderedHTMLBox"; 
import defaultText from './default-text'; 
import convertToHTML from "markdown-to-html-converter"; 

export default class Form extends Component {

    constructor (props) {
        super(props);
        this.state = {
            markdown: defaultText, 
            html: convertToHTML(defaultText), 
            checked: false 
        } 
        this.handleSubmit = this.handleSubmit.bind(this); 
        this.handleChange = this.handleChange.bind(this); 
        this.handleToggle = this.handleToggle.bind(this); 

    }

    handleToggle(){
        this.setState(prevState => ({
            checked: !prevState.checked
        })); 
    } 


    handleSubmit(event){ 
        event.preventDefault(); 
        this.setState({markdown: ""}, () => this.setState({html: ""})); 
    } 

    handleChange(event){
        this.setState({markdown: event.target.value})
        this.setState({html: convertToHTML(event.target.value)}); 
    }

    render (){

        var siblingComponent; 

        if (this.state.html){
            if (this.state.checked){
                siblingComponent = <RawHTMLBox text={this.state.html} />  
            } else {
                siblingComponent = <RenderedHTMLBox text={this.state.html} /> 
            }
        }


        return (
        <div className="boxparent"> 
            <div className = "formbox"> 
                <h3>Enter Your Markdown:</h3>
                <form onSubmit={this.handleSubmit} >
                    <div className="form-group">
                        <div className="col-sm-12">
                            <textarea onChange={this.handleChange} name="markdown" rows="5" type="text" className="form-control" value={this.state.markdown}></textarea>
                        </div>
                    </div>
                    <div> 
                        <label className="checkbox" className="col-sm-offset-10 col-sm-4">
                          <input type="checkbox" onChange={this.handleToggle} /> Raw HTML
                        </label>
                        <div className="col-sm-offset-10 col-sm-6">
                            <button type="submit" className="btn btn-info">Clear</button>
                        </div>

                    </div>

                </form>
            </div> 
                {siblingComponent}
            </div> 
        )
    }
}

