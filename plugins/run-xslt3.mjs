import { Transformer } from '@parcel/plugin';
import path from 'path';
import fs from 'fs';
import SaxonJS from 'saxon-js';
import tmp from 'tmp';
import { execSync } from 'child_process';

export default new Transformer({
  async transform({ asset, logger }) {
    // Add XSLT dependency
    const stylesheetFileName = path.format({ ...path.parse(asset.filePath), base: null, ext: ".xslt" });
    if (fs.existsSync(stylesheetFileName)) {
      asset.invalidateOnFileChange(stylesheetFileName);
    } else {
      asset.invalidateOnFileCreate(stylesheetFileName);
    }
    // Transform the SVG source
    const sourceText = await asset.getCode();
    const sourceFile = tmp.fileSync({ prefix: path.basename(asset.filePath), suffix: ".source.svg" });
    fs.writeFileSync(sourceFile.name, sourceText);
    const targetText = execSync(`xslt3 -xsl:${stylesheetFileName} -s:${sourceFile.name}`)
    asset.setCode(targetText);
    return [asset];
  }
});