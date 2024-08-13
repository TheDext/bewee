import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';
import {BuildOptions} from './types/config';

export default function buildLoaders(
    options: BuildOptions
): webpack.RuleSetRule[] {
    const {isDev} = options;
    // const babelLoader = {
    //   test: /\.(js|jsx|ts|tsx)$/,
    //   exclude: /node_modules/,
    //   use: {
    //     loader: "babel-loader",
    //     options: {
    //       presets: ["@babel/preset-env"],
    //     }
    //   }
    // }
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    const sassloader = {
        test: /\.s[ac]ss$/i,
        use: [
            MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        auto: (resPath: string) => resPath.includes('.module.'),
                        localIdentName: '[name]__[local]--[hash:base64:5]',
                    },
                },
            },
            'sass-loader',
        ],
    };

    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack', 'url-loader'],
    }

    return [typescriptLoader, sassloader, svgLoader];
}
