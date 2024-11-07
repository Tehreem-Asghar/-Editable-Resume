function editResume(){
   
const edit = document.querySelectorAll('.edit')

edit.forEach(el => {
    el.setAttribute('contenteditable', 'true')
});
}

function savedChanges(){
    const edit = document.querySelectorAll('.edit')

edit.forEach(el => {
    el.setAttribute('contenteditable', 'false')
});
}