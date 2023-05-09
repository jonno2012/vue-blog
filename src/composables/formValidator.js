export function validateAddPostForm(obj) {
    // {title: '', content: '', postCategory: null, user: null}
    if (obj.title && obj.content && obj.postCategory && obj.user) {
        return true
    }
    return false
}