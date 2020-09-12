export const classList = (classes: object) => {
    return Object.entries(classes)
        .filter(entry => entry[1])
        .map(entry => entry[0])
        .join(' ')
}

export const sleep = (ms = 0): Promise<any> => {
    return new Promise(resolve => setTimeout(resolve, ms))
}
