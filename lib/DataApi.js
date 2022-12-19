function DataApi () {
    
    const mapIntoObject = (arr) => {
        return arr.reduce((acc, curr) => {
            acc[curr.id] = curr
            return acc
        }, {})
    }
    
    getArticles = () => {
        return mapIntoObject(data.articles);
    }
    getAuthors = () => {
        return mapIntoObject(data.authors);
    }
}

export default DataApi;