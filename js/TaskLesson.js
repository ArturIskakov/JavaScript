let name = prompt('Как вас зовут?', 'Имя');
function showMessage() {
    let message = 'Привет, ' + name;
    alert(message);
}
showMessage();


let film = prompt(name + ', Какой ваш любимый фильм?', "Фильм")
function FavoriteMovie() {

    if (film == "Счастливое число Слевина") {
        alert('Хороший выбор!');
    }
    else if (film == "Армагеддон") {
        alert('Тоже приличный вариант');
    }
    else if (film == "Леон") {
        alert('Одобряю!');
    }
    else {
        alert('Попробуйте ещё раз');
    }
}
FavoriteMovie();