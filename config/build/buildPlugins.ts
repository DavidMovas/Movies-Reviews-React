import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import { BuildPaths } from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BuildOptions } from "./types/config";
import {BundleAnalyzerPlugin } from "webpack-bundle-analyzer";

export function buildPlugins(options: BuildOptions, {html}: BuildPaths): webpack.WebpackPluginInstance[] {
   var plugins: webpack.WebpackPluginInstance[] = [];

    plugins.push(new HtmlWebpackPlugin({
        template: html,
    }))

    plugins.push(new HtmlWebpackPlugin({
        template: html,
    }))

    plugins.push(new webpack.ProgressPlugin())

    plugins.push(new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash:8].css',
        chunkFilename: 'css/[name].[contenthash:8].css',
    }))

    plugins.push(new webpack.DefinePlugin({
        __IS_DEV__: JSON.stringify(options.isDev),
        __API__: JSON.stringify(options.apiUrl),
    }))

    plugins.push(new webpack.HotModuleReplacementPlugin())

    if (!options.isDev) {
        plugins.push(new BundleAnalyzerPlugin({
            openAnalyzer: false,
            analyzerPort: 3003,
        }))
    }

    return plugins;
}