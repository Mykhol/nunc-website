import React from 'react'
import MainRouter from './MainRouter'

import 'normalize.css'
import '../styling/style.scss'
import { ThemeProvider } from 'styled-components'
import theme from '../components/Theme'

export default function App () {
  return (
    <ThemeProvider theme={theme}>
      <MainRouter />
    </ThemeProvider>
  )
}