import React from 'react'

const Page = ({page, pageNum, setPageNum}) => {
    return (
        <article 
        className={`${pageNum === page ? 'pageActive' : ''}`} 
        onClick={() => setPageNum(page)}
        >{page}</article>
    )
    }

    export default Page