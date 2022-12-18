'use client'

import Head from 'next/head'
import { DefaultTheme, ThemeProvider } from 'styled-components'
import {
  Container,
  Main,
  Title,
  Description,
  CodeTag,
} from '../components/sharedstyles'
import Cards from '../components/cards'
import GlobalStyle from '../components/globalstyles'

const theme: DefaultTheme = {
  colors: {
    primary: '#111',
    secondary: '#0070f3',
  },
}

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Container>
          <Head>
            <title>Create Next App</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <Main>
            <Title>
              Welcome to <a href="https://nextjs.org">Next.js!</a>
            </Title>

            <Description>
              Get started by editing
              <CodeTag>pages/index.tsx</CodeTag>
            </Description>

            <Cards />
          </Main>
        </Container>
      </ThemeProvider>
  )
}
