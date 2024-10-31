import webpack from 'webpack'
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BuildOptions } from "./types/config";

export function buildLoaders(options : BuildOptions): webpack.RuleSetRule[] {
    const textLoader = {
        test: /\.txt$/,
        use: 'raw-loader',
        }

    const tsLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            options.isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            {
                loader: "css-loader",
                options: {
                    modules: {
                        auto: (resPath :string) => {
                            Boolean(resPath.includes('.module.'))
                        },
                        localIdentName: options.isDev ? '[path][name]__[local]--[hash:base64:5]' : '[hash:base64:8]',
                    },
                }
            },
            "sass-loader"
        ],
    }

    const imageLoader = {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
    }

    return [
        tsLoader,
        cssLoader,
        imageLoader,
        textLoader,
    ]

}