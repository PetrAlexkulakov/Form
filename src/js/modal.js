document.getElementById('modalButton').addEventListener('click', function() {
    document.getElementById('myModal').style.display = 'block';
    document.body.classList.add('no-overflow');
});

document.getElementById('closeModal').addEventListener('click', function() {
    const modal = document.getElementById('myModal');
    const modalContent = document.querySelector('.modal-content')
    modalContent.classList.add('hide');
    setTimeout(() => {
        modal.style.display = 'none';
        modalContent.classList.remove('hide');
        document.body.classList.remove('no-overflow');
    }, 500);
});
