/**
 * Karma configuration file
 * The launch script will pass the directory of the project
 * also a boolean flag will be sent if dev/prod
 *
 * The launch command will be:
 * npx nz test libs/styles --prod
 *
 * Created March 16th, 2022
 * @author: ywarezk
 * @version: 1.2.1
 * @copyright: yellowHEAD Ltd
 */

const { resolve } = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const { DefinePlugin } = require('webpack');
// const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
// const TerserPlugin = require("terser-webpack-plugin");

// const smp = new SpeedMeasurePlugin();

module.exports = (config) => {
  console.log('!!Running custom academeez karma.conf.js!!')

  const { path: projectPath, isProd } = config.client;
  const projectName = projectPath.split('/')[1];

  console.log('!!karma got the following!!: ', projectPath, isProd);

  const rootDir = __dirname;
  console.log('!!The root dir is!!:', rootDir)

  const tsconfig = resolve(rootDir, projectPath, 'tsconfig.spec.json');
  console.log('!!The tsconfig dir is!!:', tsconfig);

  // const entryPath = resolve(__dirname, 'test.ts');
  // console.log('!!entry path is!!:', entryPath);

  const projectFullPath = resolve(rootDir, projectPath);
  console.log('!!Project full path is!!:', projectFullPath);

  config.set({
    basePath: projectFullPath,

    /**
     * A test.ts file will be copied in the project directory
     * the bash script will be in charge of that
     */
    preprocessors: {
      ['**/*.spec.ts']: isProd ? ['webpack'] : ['webpack', 'sourcemap'],
      ['**/*.spec.tsx']: isProd ? ['webpack'] : ['webpack', 'sourcemap'],
    },

    mime: {
      "text/x-typescript": ["ts", "tsx"]
    },

    files: [
      {
        pattern: '**/*.spec.ts',
      },
      {
        pattern: '**/*.spec.tsx',
      },
      { type: 'css', pattern: 'https://fonts.googleapis.com/icon?family=Material+Icons' }
    ],

    frameworks: ['mocha'],

    reporters: isProd ? ['progress', 'coverage-istanbul', 'junit'] : ['progress'],

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    // will be set to true only on dev
    autoWatch: !isProd,

    // Chrome Headless when prod and Chrome when dev
    browsers: [isProd ? 'ChromeHeadlessNoSandbox' : 'Chrome'],

    // will single run only on prod
    singleRun: isProd,

    client: {
      mocha: {
        timeout: 10000 // 6 seconds - upped from 2 seconds
      }
    },

    captureTimeout: 600000, // it was already there
    browserDisconnectTimeout: 600000,
    browserDisconnectTolerance: 4,
    browserNoActivityTimeout: 600000, //by default 10000


    customLaunchers: {
      ChromeHeadlessNoSandbox: {
        base: 'ChromeHeadless',
        flags: [
          '--no-sandbox',
          '--headless',
          '--disable-gpu',
        ]
      }
    },

    // create coverage report only on prod
    // will create a reports folder in the root dir
    ...(isProd ? {
      coverageIstanbulReporter: {
        reports: ['cobertura'],
        fixWebpackSourcePaths: true,
        dir: resolve(rootDir, `reports/${projectName}`),
        'report-config': {
          cobertura: {
            file: `coverage.xml`
          }
        },
      },
    } : {}),

    // create junit report only on prod
    ...(isProd ? {
      junitReporter: {
        outputDir: resolve(rootDir, `reports/${projectName}`),
        outputFile: `unit-test.xml`,
        useBrowserName: false // add browser name to report and classes names
      },
    } : {}),

    webpack: {
      devtool: isProd ? false : 'inline-source-map',
      mode: 'development',
      target: 'web',
      output: {
        pathinfo: false,
      },
      optimization: {
        removeAvailableModules: false,
        removeEmptyChunks: false,
        splitChunks: false,
      },
      resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        fallback: {
          util: require.resolve("util"),
          path: require.resolve("path-browserify")
        },
        symlinks: false,
        plugins: [
          new TsconfigPathsPlugin({
            configFile: tsconfig
          })
        ]
      },
      plugins: [
        new DefinePlugin({
          'process': {env: {}} // it will automatically pick up key values from .env file
        })
      ],
      module: {
        rules: [
          {
            loader: 'url-loader',
            test: /\.(png)$/,
          },
          {
            loader: 'url-loader',
            test: /\.(ttf|woff2)$/,
          },
          {
            loader: 'ts-loader',
            // include: projectFullPath,
            options: {
              transpileOnly: true,
              configFile: resolve(tsconfig)
            },
            test: /\.(ts|tsx)$/,
          },
          {
            // issuer: /\.[jt]sx?$/,
            use: ['url-loader'],
            test: /\.svg$/i,
          },
          {
            use: [
              {
                ...(isProd ? {
                  loader: 'ignore-loader'
                } : {
                  loader: 'next-image-loader',
                  options: { isServer: false, isDev: true, basePath: '', assetPrefix: '' }
                })
              }
            ],
            test: /\.(jpg|jpeg|gif|webp|avif|ico|bmp)$/i,
          },
          {
            test: /\.js$/,
            include: projectFullPath,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          },
          {
            test: /\.svg$/,
            use: ['svg-react-loader'],
          },

          ...(isProd ? [{
            test: /\.(ts|tsx)$/,
            exclude: [ /\.spec\.(ts|tsx)$/, /node_modules/ ],
            enforce: 'post',
            use: [{
              loader: 'istanbul-instrumenter-loader',
              options: {
                esModules: true
              }
            }]
          }] : [])

        ]
      },
    }
  });
}
