import { Plugin } from 'vite';

const loggerPlugin = (): Plugin => {
    return {
        name: 'vite-logger-plugin',
        configResolved(config){
            console.log('configResolved', config);
        }
    }
}

export default loggerPlugin;