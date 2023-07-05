const getPosts = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then((json) => console.log(json))
    .catch(error => console.log(error));
};

const getPostsAsyncAwait = async () => {
    try {
        const data = await fetch('https://jsonplaceholder.typicode.com/posts');
        const res = await data.json();

        console.log(res);
    } catch (error) {
        console.log(error)
    }
}