import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = (props) => {
  const  { buttonStyle, buttonTextStyle } = styles;
  //the props.onPress is calling the parent fat arrow function. (it's running a callback) on press event.
  //props.children displays the content between the parents <Button></Button> tag.

  return (
    <TouchableOpacity style={ buttonStyle } onPress={props.onPress} >
        <Text style={ buttonTextStyle }> {props.children} </Text>
    </TouchableOpacity>
  );
};

//flex: 1 means that it will occupy the whole width of the container.
const styles = {
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5
  },
  buttonTextStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  }
};

//because we're exporting multiple components in src/Components/Common/index.js so we cannot export a default component there
//to export each individual module we write    export { Button } for Button.js,  export  { Card } for Card.js ...
export { Button };
