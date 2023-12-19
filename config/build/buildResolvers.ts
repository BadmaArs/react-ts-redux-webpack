import { ResolveOptions } from 'webpack';

export function duildResolvers (): ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js'],
    }
}