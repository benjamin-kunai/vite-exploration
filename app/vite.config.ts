import { defineConfig } from 'vite';
import  loggerPlugin  from './src/plugins/vite-logger-plugin';
import Inspect from 'vite-plugin-inspect';

export default defineConfig({
    plugins: [loggerPlugin(), Inspect()],
});