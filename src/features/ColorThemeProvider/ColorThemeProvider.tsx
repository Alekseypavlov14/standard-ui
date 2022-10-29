import React, { FC, ReactNode } from 'react'
import './ColorThemeProvider.css'

interface ColorThemeProviderProps {
  children: ReactNode
}

export const ColorThemeProvider: FC<ColorThemeProviderProps> = ({
  children,
}) => {
  return <div className="__ColorThemeProvider__">{children}</div>
}
