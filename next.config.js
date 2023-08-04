const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(mp4|webm|ogg)$/,
      use: {
        loader: 'file-loader',
        options: {
          publicPath: '/_next',
          name: 'static/videos/[name].[hash].[ext]', // Adjust the output path and file naming as needed
        },
      },
    });

    config.module.rules.push({
      test: /\.(png|jpe?g|gif|svg)$/i,
      use: {
        loader: 'file-loader',
        options: {
          publicPath: '/_next',
          name: 'static/images/[name].[hash].[ext]', // Adjust the output path and file naming as needed
        },
      },
    });

    return config;
  },
};

module.exports = nextConfig;
