module.exports = (source) => {
    console.log('2------',source)
    return `module.exports=${JSON.stringify(source)}`
}