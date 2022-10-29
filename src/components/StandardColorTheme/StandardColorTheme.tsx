import React, { FC, ReactNode } from 'react'
import './StandardColorTheme.css'

interface StandardColorThemeProps {
  children: ReactNode
}

export const StandardColorTheme: FC<StandardColorThemeProps> = ({
  children,
}) => {
  return <div className="__StandardColorTheme__">{children}</div>
}
