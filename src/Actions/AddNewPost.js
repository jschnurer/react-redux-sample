export default function AddNewPost(title, body) {
    return {
        type: 'ADD_NEW_POST',
        title,
        body,
    }
}