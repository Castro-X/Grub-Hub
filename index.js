let title = document.getElementById('card-title')
let image = document.getElementById("card-image")
let likes = document.getElementById('like-count')
let dislikes = document.getElementById('dislike-count')
let list = document.getElementById('comments-list')

fetch('http://Grub-hub/Grub-views')
    .then(response => response.json())
    .then(data => {
        title.textContent = data.title
        image.src = data.image
        likes.textContent = data.likes
        list.innerHTML = ''
        data.comments.forEach(element => {
            let li = document.createElement('li')
            li.textContent = element.content
            list.append(li)

        });
    })
let button = document.getElementById('like-button')
button.addEventListener('click', function () {
    let numlikes = parseInt(likes.textContent)
    likes.textContent = numlikes + 1



let button = document.getElementById('dislike-button')
button.addEventListener('click', function () {
    let numdislikes = parseInt(likes.textContent)
    likes.textContent = numdislikes + 1

})
})

let form = document.getElementById('comment-form')
form.addEventListener('submit', function (e) {
    e.preventDefault()
    let li = document.createElement('li')
    li.textContent = e.target.comment.value
    list.append(li)

    form.reset ()
})