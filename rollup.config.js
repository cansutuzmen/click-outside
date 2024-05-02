import { terser } from 'rollup-plugin-terser';

const devMode = process.env.NODE_ENV === 'development';

export default [
  {
    input: 'src/index.js',
    output: {
      file: 'dist/index.js',
      format: 'es',
      plugins: [
        terser({
          ecma: 2020,
          mangle: { toplevel: true },
          compress: {
            module: true,
            toplevel: true,
            unsafe_arrows: true,
            drop_console: !devMode,
            drop_debugger: !devMode,
          },
        }),
      ],
    },
  },
];
