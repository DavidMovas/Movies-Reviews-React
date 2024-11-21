import { Configuration as DevServerConfiguration } from "webpack-dev-server";

export function buildDevServer() :DevServerConfiguration {
    return {
        port: 3000,
        open: true,
        historyApiFallback: true,
        hot: true,
    }
}