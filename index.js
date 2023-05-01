const inputField = document.querySelector('.movie-input')
const movieList = document.querySelector('ul')
const movieForm = document.querySelector('.add-movie')
const message = document.querySelector('#message')


function addMovie(event){
    event.preventDefault()
    const movie = document.createElement('li')
    const movieTitle = document.createElement('span')
    const deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'X'
    deleteBtn.addEventListener('click', deleteMovie)
    movieTitle.textContent = inputField.value
    movie.appendChild(movieTitle)
    movieTitle.addEventListener('click', crossOffMovie)
    movie.appendChild(deleteBtn)
    movieList.appendChild(movie)
    inputField.value= ""
}

function deleteMovie(e){
    e.preventDefault()
    let deletedMovie = e.target.parentNode.firstChild.textContent
    message.textContent = `${deletedMovie} deleted!`
    e.target.parentNode.remove()
    revealMessage()
}
movieForm.addEventListener('submit', addMovie)


function crossOffMovie (e) 
{
    let MOVIE = e.target.textContent
    e.target.classList.toggle('checked')
    if(e.target.classList.contains('checked')){
        message.textContent = `${MOVIE} watched!`
    }else if(e.target.classList.contains("checked")=== false) {
        message.textContent = `${MOVIE} added back!`
    }
}


function revealMessage(){
    message.classList.remove('hide')
    setTimeout(()=>{
        message.classList.add('hide')
    }, 2000)
}