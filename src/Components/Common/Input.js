import React, {  Component } from 'react';
import { View, Text, TextInput, Platform } from 'react-native';

const Input = (props) => {
  //the caller has to pass in the value and onChangeText fat arrow function
  const { inputSyle, labelStyle, containerStyle  } = styles;

  return (
      <View style={ containerStyle }>
        <Text style= { labelStyle  }>{ props.label }</Text>
        <TextInput
          placeholder={props.placeholder}
          autoCorrect={false}
          style={inputSyle}
          value= { props.value }
          onChangeText= { props.onChangeText }
          secureTextEntry={props.secureTextEntryProp}
        />
      </View>
  );
};

//flex width allocation:
//Add up all the flex values of the CHILD elements only. In this case it's flex: 1 + flex: 2 = 3
//inputStyle has a flex 2 so inputStyle will occupy 2/3rd of the space and labelStyle will occupy 1/3rd of the space.
const styles = {
  inputSyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2,
    height: Platform.OS == 'android' ? 40 : 20,
    width: 100
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
};

export { Input }
