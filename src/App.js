import logo from './logo.svg';
import './App.css';
import RouterComponent from './common/router';
import { basicStore, configStore } from './common/configure-store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

function App() {
  return (
    <div>
      <Provider store={basicStore()}>
        {/* <Provider store={configStore().store}> */}
        <PersistGate persistor={configStore().persistor}>
          <RouterComponent />
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
