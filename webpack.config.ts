import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import path from "path";
import { BuildEnv, BuildPaths } from "./config/build/types/config";

export default (env: BuildEnv) => {
    const buildPaths :BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve('build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
    }

    const mode = env.mode || 'development';
    const isDev = mode === 'development';
    const PORT = env.port || 3000;

    return buildWebpackConfig({
        mode: mode,
        paths: buildPaths,
        isDev: isDev,
        port: PORT,
    });
};