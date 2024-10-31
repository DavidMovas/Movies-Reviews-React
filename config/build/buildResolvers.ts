import webpack from "webpack";

export function buildResolvers() : webpack.ResolveOptions {
    return {
        extensions: ['.js', '.json', '.wasm', '.jsx', '.ts', '.tsx'],
    }
}