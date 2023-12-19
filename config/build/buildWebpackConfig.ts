import { BuildOption } from './types/config';
import webpack from 'webpack';
import path from 'path';
import {buildsPlugins} from './buildPlugins';
import {duildLoaders} from './buldLoaders';
import {duildResolvers} from './buildResolvers';
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
            rules: duildLoaders(options),
          },
        resolve: duildResolvers(),
        devtool: isDev ? 'inline-source-map' : undefined ,
        devServer: isDev ? buildDevServer(options) : undefined
    }
}