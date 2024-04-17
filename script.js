let datas = [];

// ------------------------ select tbody's item to delete --------------

document.querySelectorAll('.tr-body').forEach(function (tr) {
    tr.addEventListener('click', function () {
        this.style.backgroundColor = 'red';
        datas.push(this);
    });
});



// ------------ remove tbody's items ------------------

document.querySelector('.trash-btn').addEventListener('click', function () {

    let tbody = document.querySelector('.tbody');

    for (let k = 0; k < datas.length; k++) {

        for (let i = 0; i < tbody.children.length; i++) {
            if (tbody.children[i] === datas[k]) {
                tbody.removeChild(datas[k]);
                break;
            }
        }
    }
});



