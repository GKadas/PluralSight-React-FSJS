import React, { useState } from 'react'
import { mapIntoObject, getArticles, getAuthors} from '../DataApi'
import { data } from '../testData.json'
import ArticleList from './ArticleList'
import render from 'react-dom'

const api = mapIntoObject(data)

function App() {
    const [articles, setArticles] = useState(getArticles)
    const [authors, setAuthors] = useState(getAuthors)

    render(
        <ArticleList
            articles={articles}
            authors={authors} />
    )
}

export default App