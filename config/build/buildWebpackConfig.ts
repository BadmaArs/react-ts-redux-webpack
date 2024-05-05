import { BuildOption } from './types/config';
import webpack from 'webpack';
import path from 'path';
import {buildsPlugins} from './buildPlugins';
import {buildLoaders} from './buldLoaders';
import {buildResolvers} from './buildResolvers';
import { buildDevServer } from './buildDevServer';

export function buildWepackConfig (options: BuildOption): webpack.Configuration {
    const {paths, mode, isDev} = options
    return {
        mode,
        entry: paths.entry,
        output: {
            filename: '[name].[contenthash].js',
            path: paths.build,
            clean: true
        },
        plugins: buildsPlugins(options),
        module: {
            rules: buildLoaders(options),
          },
        resolve: buildResolvers(options),
        devtool: isDev ? 'inline-source-map' : undefined ,
        devServer: isDev ? buildDevServer(options) : undefined
    }
}