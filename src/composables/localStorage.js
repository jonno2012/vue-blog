export function getStorage(key) {
    let results = localStorage.getItem(key)
    if (results) {
        return JSON.parse(results)
    } else {
        return []
    }
}

export function storeItem(key, item) {
    let items = getStorage(key)

    items.push(item)

    localStorage.setItem(key, JSON.stringify(items))

    return getStorage(key)
}

export function removeItem(key, objId) {
    let items = getStorage(key)

    items = items.filter(item => {
        console.log(item.id)
        console.log(objId)
        return parseInt(item.id) !== parseInt(objId)
    })

    localStorage.setItem(key, JSON.stringify(items))

    return items
}

export function removeAllItems(key) {
    localStorage.setItem(key, JSON.stringify([]))
}