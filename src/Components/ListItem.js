import React, { Component } from 'react';
import {Text, TouchableWithoutFeedback, View,UIManager, Platform, LayoutAnimation } from 'react-native';
import { connect } from 'react-redux';
import {CardSection} from './Common';
import * as actions from '../Actions'
//the index.js in Actions/index.js does not contain a default export, so we import all
//functions defined in that file

class ListItem extends Component {
  constructor() {
    super();
    //to make LayoutAnimation work for android
    if(Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }

  //lifecycle method
  //componentWillUpdate is deprecated. The animations will also work in componentDidUpdate lifecycle method.
  componentDidUpdate() {
    LayoutAnimation.spring();
  }

  renderDescription() {
    const { description } = this.props.library.item;
    const { expanded } = this.props;
    if(expanded) {
      return (
        <CardSection>
          <Text style={{ flex: 1 }}>{description}</Text>
        </CardSection>
      );
    }
  }

  render() {
    const { titleStyle } = styles;
    //console.log(this.props);
    const { title, id } = this.props.library.item;

//selectLibrary is the actions function that is executed in the onPress event in TouchableWithoutFeedback.

    return (
      <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id) }>
        <View>
          <CardSection>
            <Text style={titleStyle}>
              {title}
            </Text>
          </CardSection>

          <View style={{justifyContent: 'center', alignItems: 'center' }}>
            {this.renderDescription()}
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
};

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  },
};

/*ownProps is the props that we are wrapping. In this case it's the individual LibraryList
such as webpack/react/redux, etc..
*/
const mapStateToProps = (state, ownProps) => {
  //console.log(ownProps);
  const expanded = state.selectedLibraryId === ownProps.library.item.id;
  //The state selectedLibraryId is part of the SelectionReducer.
  return {  expanded };
};


//first argument must be a mapStateToProps and the 2nd argument must be bind Action creator to this function.
//if we don't have a mapStateToProps then we can pass in null.
//the 2nd arg is the entire list of actions defined in Actions/index.js
//this also creates the actions and dispatches it to all the reducers.
export default connect(mapStateToProps, actions)(ListItem);
