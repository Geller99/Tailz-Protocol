import React from 'react'

const Page = () => {

    const fetchRoot = async () => {
        let result = await fetch('/api/rootapi');

        return result;
    }


  return (
    <div>This is a test page </div>
  )
}

export default Page