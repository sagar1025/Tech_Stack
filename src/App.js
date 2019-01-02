import React from 'react';
import { View } from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import Reducers from './Reducers'
import {Header} from './Components/Common';
import LibraryList from './Components/LibraryList';


//provider is a bridge between redux and react.
//The provider can have only 1 child component
const App = () => {
  return (
    <Provider store={createStore(Reducers)}>
      <View style={{ flex: 1 }}>
        <Header headerText="Tech Stack" />
        <LibraryList />
      </View>
    </Provider>
  );
};

export default App;
