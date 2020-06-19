const posts = [
    { title: 'Post One', body:'This is post one'},
    { title: 'Post Two', body:'This is post two'}
];

// Nota: Se ejecuta como respuesta resolve() --> .then de la promesa
// en la línea de código donde se crea el objeto.
function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

// Nota: Se declara promesa
function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);

            const error = true;

            if(!error) {
                resolve();
            } else {
                reject('Error: Something went wrong');
            }
        }, 2000);
    });
}

// Se crea objeto. Se llama getPosts como respuesta de la promesa
// Respuesta de promesa: resolve() ---> .then()
// Respuesta de promesa: reject
createPost({ title: 'Post Three',body: 'This is post Three'})
        .then(getPosts)
        .catch(err => console.log(err));

