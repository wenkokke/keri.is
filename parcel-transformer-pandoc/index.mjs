import { Transformer } from '@parcel/plugin';

export default new Transformer({
  async transform({ asset, config, logger }) {
    let code = await asset.getCode();
    logger.verbose(code);

    asset.type = 'html';
    asset.setCode('hello');

    return [asset]
  }
});