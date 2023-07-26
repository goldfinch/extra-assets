import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import autoprefixer from "autoprefixer";
import * as path from 'path'
import { viteStaticCopy } from 'vite-plugin-static-copy'
import cfg from './app.config.js'

export default defineConfig({

  resolve: {
      alias: {
          '~bootstrap-icons': path.resolve(__dirname, 'node_modules/bootstrap-icons/icons'),
      }
  },

  build: {
    emptyOutDir: true,
    outDir: '../dist',
    rollupOptions: {
      output: {
        entryFileNames: `[name].js`,
        chunkFileNames: `js/[name].js`,
        assetFileNames: (assetInfo) => {
          if (assetInfo.name.endsWith('.css')) {
            return '[name][extname]'
          } else if (
            assetInfo.name.match(/(\.(woff2?|eot|ttf|otf)|font\.svg)(\?.*)?$/)
          ) {
            return 'fonts/[name][extname]'
          } else if (assetInfo.name.match(/\.(jpg|png|svg)$/)) {
            return 'images/[name][extname]'
          }

          return 'js/[name][extname]'
        }
      }
    }
  },

  plugins: [

    laravel({
      input: [
        'src/bootstrap-icons.scss',
        'src/font-nunito.scss',
        'src/font-opensans.scss',
        'src/font-poppins.scss',
        'src/font-roboto.scss',
        'src/font-ubuntu.scss',
      ],
      refresh: true,
      // buildDirectory: '',
    }),

    viteStaticCopy({
      targets: [
        {
          src: './node_modules/bootstrap-icons/font/fonts/*',
          dest: '../dist/bootstrap-icons/fonts',
        },
        {
          src: './node_modules/bootstrap-icons/icons/*',
          dest: '../dist/bootstrap-icons/icons',
        },
        {
          src: './src/fonts/*',
          dest: '../dist/fonts',
        },
      ],
    })
  ],

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: cfg.sassAdditionalData,
      },
    },
    postcss: {
      plugins: [
        autoprefixer,
      ],
    }
  },

});
