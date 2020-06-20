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

            const error = false;

            if(!error) {
                resolve();
            } else {
                reject('Error: Something went wrong');
            }
        }, 2000);
    });
}

// ******************************************
// Nota: Ejemplo 1. Se crea objeto. Se llama getPosts como respuesta de la promesa
// Respuesta de promesa: resolve() ---> .then()
// Respuesta de promesa: reject
// createPost({ title: 'Post Three',body: 'This is post Three'})
//         .then(getPosts)
//         .catch(err => console.log(err));
// ******************************************


// ******************************************
// Nota: Ejemplo 2. Promise.all
// const promise1 = Promise.resolve('Hello World');
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) => setTimeout(resolve, 2000, 'Goodbye'));
// const promise4 = fetch('https://jsonplaceholder.typicode.com/users')
//             .then(res => res.json()
//             );

//Async / Await
// Async / await Es una forma para manejar las respuestas
// async function init() {
//     await createPost({ title: 'Post Three',body: 'This is post Three'});

//     getPosts();
// }

// init();

// Async / Await / Fetch

async function fetchUsers() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')

    const data = await res.json();
    console.log(data);
}

fetchUsers();


// Promise.all toma un array de promesas
// El tiempo para regresar las promesas será aquella que "tome más tiempo"
// En éste caso promise3
// Promise.all([promise1, promise2, promise3, promise4])
//     .then(((values) => console.log(values)));
// ******************************************





