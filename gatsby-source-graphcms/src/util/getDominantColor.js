import { fetchRemoteFile } from 'gatsby-core-utils'

import { PLUGIN_NAME } from './constants'

export async function getImageDominantColor({ url, cache }) {
  try {
    const { getDominantColor } = require(`gatsby-plugin-sharp`)

    const filePath = await fetchRemoteFile({
      url,
      cache,
    })

    const backgroundColor = await getDominantColor(filePath)

    return backgroundColor
  } catch (error) {
    console.error(`[${PLUGIN_NAME}]`, error)

    return `rgba(0, 0, 0, 0.5)`
  }
}
