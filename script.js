let datas = [];

// ------------------------ select tbody's item to delete --------------

function addEventListenerToAllTr(){
    document.querySelectorAll('.tr-body').forEach(function (tr) {
        tr.addEventListener('click', function () {
            document.querySelector('.trash-btn').removeAttribute('disabled');
            this.style.backgroundColor = 'red';
            datas.push(this);
        });
    });
    
};


addEventListenerToAllTr();

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
    document.querySelector('.trash-btn').setAttribute('disabled', 'disabled');
});



// ------------------------- add data tbody -------------------------
document.querySelector('.add-btn').addEventListener('click', function () {
    let tbody = document.querySelector('.tbody');
    let newRow = document.createElement('tr');
    newRow.classList.add("tr-body");
    for (let i = 0; i < 4; i++) {
        let newCell = document.createElement('td');
        newCell.textContent = "fake";
        newRow.appendChild(newCell);
    };
    tbody.appendChild(newRow);
    addEventListenerToAllTr();
});







