import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import Image from 'next/image'
import log from './pages/logo.png'
import styles from './components/counters.module.css'


const config: DocsThemeConfig = {
  logo: <span className={styles.logo}><Image src={log}  width={70}  height={70} alt="hashim" />  <h1>tinygrad  </h1> </span>,
  project: {
    link: 'https://github.com/tinygrad/tinygrad',
  },
  chat: {
    link: 'https://discord.gg/ZjZadyC7PK',
  },
  docsRepositoryBase: 'https://github.com/tinygrad/tinygrad/tree/master/docs',
  footer: {
    text: 'we are the tiny corp We write and maintain tinygrad, the fastest growing neural network framework   work@tinygrad.org  ',
  },
  
   
}

export default config
