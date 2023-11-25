import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import Image from 'next/image'
import log from './pages/logo.png'
const config: DocsThemeConfig = {
  logo: <span><Image src={log}  width={70}  height={70} alt="hashim" />  </span>,
  project: {
    link: 'https://github.com/tinygrad/tinygrad',
  },
  chat: {
    link: 'https://discord.com',
  },
  docsRepositoryBase: 'https://github.com/tinygrad/tinygrad/tree/master/docs',
  footer: {
    text: 'Nextra Docs Template',
  },
}

export default config
