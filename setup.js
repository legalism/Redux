import { AppRegistry } from 'react-native';
import App from './src/App';




if (!__DEV__) {
    global.console = {
        info: () => {},
        log: () => {},
        warn: () => {},
        error: () => {},
    };
}

AppRegistry.registerComponent('Redux', () => App);