import webpack from 'webpack'
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BuildOptions } from "./types/config";

export function buildLoaders(options : BuildOptions): webpack.RuleSetRule[] {
    const textLoader = {
        test: /\.txt$/,
        use: 'raw-loader',
    }

    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    }

    const tsLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    const scssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            options.isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            {
                loader: "css-loader",
                options: {
                    modules: {
                        namedExport: false,
                        auto: (resPath :string) => {
                            Boolean(resPath.includes('.module.'))
                        },
                        localIdentName: options.isDev ? '[path][name]__[local]--[hash:base64:5]' : '[hash:base64:5]',
                    },
                }
            },
            "sass-loader"
        ]
    }

    const cssLoader = {
        test: /\.css$/,
        use: [
            'style-loader',
            {
                loader: 'css-loader',
                options: {
                    modules: true,
                },
            },
        ],
    }

    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff2|woff)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ]
    }

    return [
        tsLoader,
        svgLoader,
        fileLoader,
        textLoader,
        scssLoader,
        cssLoader
    ]
}