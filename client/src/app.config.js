export default function initCfg(command, mode, ssrBuild) {

  const dev = command === 'serve';
  const host = 'silverstripe-starter.lh';

  const bootstrap_icon_fonts_path = dev ? 'https://'+host+':5173/node_modules/bootstrap-icons/fonts' : '../dist/bootstrap-icons/fonts';
  // const bootstrap_icon_fonts_path = dev ? 'https://'+host+':5173/node_modules/bootstrap-icons/fonts' : '/_resources/vendor/goldfinch/extra-assets/client/dist/bootstrap-icons/fonts';

  return {
    sassAdditionalData: `
      $bootstrap-icons-font-dir: '${bootstrap_icon_fonts_path}';
    `,
  }
}
