import postcss from 'rollup-plugin-postcss';

export default {
  rollup(config, options) {
    config.plugins.push(
      postcss({
        config: {
          path: './postcss.config.js',
          ctx: null,
        },
        extensions: ['.css'],
        minimize: true,
        inject: {
          insertAt: 'top',
        },
      })
    );

    return config;
  },
};
