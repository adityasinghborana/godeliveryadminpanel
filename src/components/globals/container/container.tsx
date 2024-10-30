import React from 'react'

type Props = {
    children: React.ReactNode
}

const Container = ({ children }: Props) => {
  return (
    <div style={{ scrollbarWidth: "none" }} className="h-screen overflow-scroll backdrop-blur-[35px] dark:bg-muted/40 bg-gray-100 dark:shadow-2xl dark:shadow-black  mx-auto pt-10 p-4 absolute right-0 left-0 botton-0 z-[11]"
    id="blur-page">{children}</div>
  )
}

export default Container