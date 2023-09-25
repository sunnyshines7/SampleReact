import logo from './logo.svg';
import './App.css';
import RouterComponent from './common/router';
import { basicStore, configStore } from './common/configure-store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import "@aws-amplify/ui-react/styles.css";
import {
  withAuthenticator,
  Button,
  Heading,
  Image,
  View,
  Card,
} from "@aws-amplify/ui-react";

function App({ signOut }) {
  return (
    <View className="App">
      <Card>
        <Image src={logo} className="App-logo" alt="logo" />
        <Heading level={1}>We now have Auth!</Heading>
      </Card>
      <div>
        <Provider store={basicStore()}>
          {/* <Provider store={configStore().store}> */}
          <PersistGate persistor={configStore().persistor}>
            <RouterComponent />
          </PersistGate>
        </Provider>
      </div>
      <Button onClick={signOut}>Sign Out</Button>
    </View>
  );
}

export default withAuthenticator(App);

