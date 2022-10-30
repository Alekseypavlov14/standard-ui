import React, { FC, ReactNode } from 'react'
import './ThemeProvider.css'

interface ThemeProviderProps {
  children: ReactNode
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  return <div className="__ThemeProvider__">{children}</div>
}
