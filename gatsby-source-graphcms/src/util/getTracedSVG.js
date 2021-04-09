import { extname } from 'path'
import { fetchRemoteFile } from 'gatsby-core-utils'

import { PLUGIN_NAME } from './constants'

export async function getTracedSVG({ url, internal, filename, cache }) {
  try {
    const { traceSVG } = require(`gatsby-plugin-sharp`)

    const filePath = await fetchRemoteFile({
      url,
      cache,
    })

    const extension = extname(filePath)

    const image = await traceSVG({
      file: {
        internal,
        name: filename,
        extension,
        absolutePath: filePath,
      },
      args: { toFormat: `` },
      fileArgs: {},
    })

    return image
  } catch (error) {
    console.error(`[${PLUGIN_NAME}]`, error)
  }
}
