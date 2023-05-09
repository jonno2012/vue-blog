export async function fetchUsers() {
    let posts = []
    let results
    await fetch('https://jsonplaceholder.typicode.com/users').then(response => results = response.json())
    await results.then(response2 => {
        posts = response2
    })
console.log('posts promise', posts)
    return posts
}