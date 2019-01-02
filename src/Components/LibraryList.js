import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList } from 'react-native';
import ListItem from './ListItem';

 class LibraryList extends Component {
   renderItem(library) {
     return <ListItem library={library} />;
   }

  render() {
    return (
      <FlatList
        data={this.props.libraries}
        renderItem={this.renderItem}
        keyExtractor={(library) => library.id.toString()}
      />
    )
  }
}
//the id in the json file will act as a unique ID in the FlatList keyExtractor


//returning an object in this function would show up as props in this component.
//the prop is libraries and the state is state.libraries. The name libraries is defined in index.js in
//the combineReducers function
const mapStateToProps = state => {
  return { libraries: state.libraries };
};

//when connect() is called, it returns a function.
//We're then passing LibraryList as a parameter to that function.
//connect() method forges a connection between the LibraryList and application state.
export default connect(mapStateToProps)(LibraryList);
