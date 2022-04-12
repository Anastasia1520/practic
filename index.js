let auditorium = {
    number: 57,
    furniture: ['bookcase','desk','chair'],
    tv: true,
    video: true,
    board: {
        material: 'metal',
        coating: ['green', 'matte'],
    area: 70.80
    }
}

function addFurniture() {
    auditorium.furniture.push(document.getElementById('furniture').value)
    document.getElementById('func1').innerHTML = auditorium.furniture
}

function checkTv() {
    auditorium.tv = document.getElementById('checktv').checked ? 'Имеется' : 'Не имеется'
    document.getElementById('tv').innerHTML = auditorium.tv
}

function checkVideo() {
    auditorium.video = document.getElementById('checkvd').checked ? 'Имеется' : 'Не имеется'
    document.getElementById('video').innerHTML = auditorium.video
}

function changeMaterialBoard() {
    auditorium.board.material = document.getElementById('inputMat').value
    alert(`Материал доски: ${auditorium.board.material}`)
}
