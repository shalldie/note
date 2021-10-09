import path from 'path';
import {defineConfig} from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
    plugins: [dts()],
    build: {
        lib: {
            entry: path.join(__dirname, 'src/main.ts'),
            name: 'SomeLibrary',
            fileName: format => `some-library.${format}.js`
        }
    }
});
