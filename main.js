'use strict';
//1. input value
//2. addBtn , keypress Enter
//3. add item to items 
//4. trash btn
const items = document.querySelector('.items');
const input = document.querySelector('.footer_input');
const addBtn = document.querySelector('.footer_btn');

function onAdd() {
    //1. input text 
    const text = input.value;
    if(text === '') {
        input.focus();
        return;
    }
    //2. new item(text + transh btn)
    const item = createItem(text);
    //3. add new item in items 
    items.appendChild(item);
    //scrolling to new item
    item.scrollIntoView({block: 'center'});
    //4. default input, keep focus
    input.value = '';
    input.focus();
};

let id = 0;
function createItem(text) {
    const itemRow = document.createElement('li');
    itemRow.setAttribute('class','item_row');
    itemRow.setAttribute('data-id',id);
        itemRow.innerHTML = `
            <div class="item">
                <span class="item_name">${text}</span>
                <button class="item_delete">
                    <i class="fas fa-trash-alt" data-id=${id}></i>
                </button>
            </div>
            <div class="item_line"></div>
        `;
    id++;
    return itemRow;
}

addBtn.addEventListener('click', () => {
    onAdd();
});

input.addEventListener('keypress', event => {
    if(event.key === 'Enter') {
        onAdd();
    }
});

items.addEventListener('click', event => {
    const id = event.target.dataset.id;
    if(id) {
        const toBeDeleted = document.querySelector(`.item_row[data-id="${id}"]`);
        toBeDeleted.remove();
    }
});
