import React from 'react';
import configureStore from './stores/Store';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import {createAppContainer} from "react-navigation";
import { PersistGate } from 'redux-persist/es/integration/react';
import routes from './config/routes';

const AppContainer = createAppContainer(routes);

export default function Main() {
    return (
        <Provider store={configureStore().store}>
            <PersistGate loading={null}  persistor={configureStore().persistor}>
                <SafeAreaProvider>
                    <AppContainer/>
                </SafeAreaProvider>
            </PersistGate>
        </Provider>
  );
}
