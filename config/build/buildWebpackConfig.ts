import webpack from "webpack";
import { BuildOptions } from "./types/config";
import { buildLoaders } from "./buildLoaders";
import { buildPlugins } from "./buildPlugins";
import { buildResolvers } from "./buildResolvers";
import { buildDevServer } from "./buildDevServer";


export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const {mode, paths} = options;

    return {
        entry: paths.entry,
        mode: mode,
        module: {
            rules: buildLoaders(options),
        },
        output: {
            filename: '[name][contenthash].js',
            chunkFilename: '[name][contenthash].js',
            path: paths.build,
            clean: true
        },
        optimization: {
            splitChunks: {
                chunks: 'async',
            },
        },
        plugins: buildPlugins(options, paths),
        resolve: buildResolvers(options),
        devtool: options.isDev? 'inline-source-map' : undefined,
        devServer: options.isDev ? buildDevServer() : undefined,
    }
}