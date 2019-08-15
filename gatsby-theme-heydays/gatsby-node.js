const path = require('path')
const fs = require('fs-extra')
const mkdirp = require('mkdirp')

exports.onPreBootstrap = ({ store, reporter }, themeOptions) => {
  const { program } = store.getState()

  // Define folder structure
  const dirs = [
    path.join(program.directory, 'src/pages'),
    path.join(program.directory, 'src/components'),
    path.join(program.directory, 'static'),
    path.join(program.directory, 'static/fonts')
  ]

  // Add folders if missing
  dirs.forEach(dir => {
    if (!fs.existsSync(dir)) {
      reporter.log(`creating the ${dir} directory`)
      mkdirp.sync(dir)
    }
  })

  // Define files and directories to copy to copy
  const moveFiles = [
    {
      src: path.join(__dirname, 'files/.env-sample'),
      dest: path.join(program.directory, '.env-sample')
    },
    {
      src: path.join(__dirname, 'src/styles'),
      dest: path.join(program.directory, '/src/styles')
    }
  ]

  moveFiles.forEach(item => {
    if (!fs.existsSync(item.dest)) {
      reporter.log(`creating the ${item.dest} file or directory`)
      fs.copy(item.src, item.dest)
    }
  })
}

// Possible oppertunity to add glob importing for sass on this lifecycle
// https://www.gatsbyjs.org/docs/node-apis/#onCreateWebpackConfig
// exports.onCreateWebpackConfig = ({ actions, loaders, getConfig }) => {
//   const config = getConfig()
// }

// const globImporter = require('node-sass-glob-importer')

// exports.onCreateWebpackConfig = ({
//   stage,
//   getConfig,
//   rules,
//   loaders,
//   actions
// }) => {
//   actions.setWebpackConfig({
//     module: {
//       rules: [
//         {
//           test: /\.scss$/,
//           use: ExtractTextPlugin.extract([
//             {
//               loader: 'css-loader'
//             },
//             {
//               loader: 'sass-loader',
//               options: {
//                 importer: globImporter()
//               }
//             }
//           ])
//         }
//       ]
//     }
//   })
// }
