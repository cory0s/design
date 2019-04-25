import React from 'react';
import Checkbox from './checkbox.js';
import Input from './input.js';
import Radio from './radio.js';
import Select from './select.js';

class HorizontalForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
  }
  
  render(){
    return(
      <form>
        <Checkbox />
        <Input />
        <Select />
        <Radio />
        <Input />
      </form>
    )
  }
}

class VerticalForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
  }

  render(){
    return(
      <form>
        <label></label>
        <Input />
        <Input />
        <Select />
      </form>
    )
  }
}

export default {HorizontalForm, VerticalForm}