function editResume() {
    var edit = document.querySelectorAll('.edit');
    edit.forEach(function (el) {
        el.setAttribute('contenteditable', 'true');
    });
}
function savedChanges() {
    var edit = document.querySelectorAll('.edit');
    edit.forEach(function (el) {
        el.setAttribute('contenteditable', 'false');
    });
}
