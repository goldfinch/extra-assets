
const dev = import.meta.env && !import.meta.env.DEV;

const bootstrap_icon_path = dev ? '../node_modules/bootstrap-icons/font/fonts' : '/_resources/vendor/goldfinch/extra-assets/client/dist/bootstrap-icons/fonts';

export default {

  sassAdditionalData: `
    $bootstrap-icons-font-dir: '${bootstrap_icon_path}';
  `,
}
