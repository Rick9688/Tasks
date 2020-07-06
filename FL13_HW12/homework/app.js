const root = document.getElementById('root');
const index1 = 2;
const index2 = 3;

const bookList = document.createElement('div');
bookList.className = 'bookList';
const dynamicSection = document.createElement('div');
dynamicSection.className = 'dynamicSection';

root.append(bookList);
root.append(dynamicSection);


if (!localStorage.getItem('books')) {
    const serializedBooks = JSON.stringify(books);
    localStorage.setItem('books', serializedBooks);
}


window.onload = () => {
    window.dispatchEvent(new Event('locationchange'));
}

function renderList(books) {
    const list = document.createElement('ul');
    books.forEach(book => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
          <p class="bookName" id="preview_${book.id}">${book.name}</p>
          <button id="edit_${book.id}" class="editBtn">edit</button>
        `;
        list.append(listItem);
    });
    const addBtn = document.createElement('button');
    addBtn.innerText = 'add book';
    addBtn.className = 'addBtn';
    addBtn.id = 'add';
    bookList.innerHTML = '';
    bookList.append(list)
    bookList.append(addBtn);
}

renderList(JSON.parse(localStorage.getItem('books')));

bookList.addEventListener('click', (e) => {
    const target = e.target.id;

    if (target === 'add') {
        history.replaceState(null, null, location.pathname + '#' + target);

    } else {
        const id = target.replace(/\D+/, '');

        if (target.includes('preview')) {
            history.pushState(null, null, `?id=${id}#preview`);
        }

        if (target.includes('edit')) {
            history.pushState(null, null, `?id=${id}#edit`);
        }
    }
    window.dispatchEvent(new Event('locationchange'));
})

window.addEventListener('locationchange', () => {
    dynamicSection.innerHTML = '';
    const ourBooks = JSON.parse(localStorage.getItem('books'));

    if (location.hash === '#add') {
        const form = document.createElement('form');
        form.className = 'form';
        const inputName = document.createElement('input');
        inputName.placeholder = 'Name'
        inputName.setAttribute('required', true);
        const inputAuthor = document.createElement('input');
        inputAuthor.placeholder = 'Author'
        inputAuthor.setAttribute('required', true);
        const inputImage = document.createElement('input');
        inputImage.placeholder = 'Image'
        inputImage.setAttribute('required', true);
        const inputPlot = document.createElement('input');
        inputPlot.placeholder = 'Plot'
        inputPlot.setAttribute('required', true);
        const btnWrapper = document.createElement('div');
        btnWrapper.className = 'buttons';
        const cancelBtn = document.createElement('button');
        cancelBtn.innerText = 'cancel';
        cancelBtn.setAttribute('id', 'cancel');
        const appendBtn = document.createElement('button');
        appendBtn.innerText = 'append';
        appendBtn.setAttribute('type', 'submit');
        btnWrapper.appendChild(cancelBtn);
        btnWrapper.appendChild(appendBtn);

        form.appendChild(inputName);
        form.appendChild(inputAuthor);
        form.appendChild(inputImage);
        form.appendChild(inputPlot);
        form.appendChild(btnWrapper);

        dynamicSection.appendChild(form);

        document.querySelector('#cancel').addEventListener('click', () => {
            dynamicSection.innerHTML = '';
        })

        document.querySelector('.form').addEventListener('submit', (e) => {
            e.preventDefault();
            const formElements = document.forms[0].elements;
            const newBook = {
                id: ourBooks.length + 1,
                name: formElements[0].value,
                author: formElements[1].value,
                image: formElements[index1].value,
                plot: formElements[index2].value
            }

            ourBooks.push(newBook);

            const ourSerializedBooks = JSON.stringify(ourBooks);

            localStorage.setItem('books', ourSerializedBooks)

            renderList(ourBooks);
            dynamicSection.innerHTML = '';
        })

    } else {
        const id = location.search.replace(/\D+/, '');

        if (location.hash === '#edit') {

            const editableBook = ourBooks[id - 1];

            const form = document.createElement('form');
            form.className = 'form';
            const inputName = document.createElement('input');
            inputName.placeholder = 'Name'
            inputName.value = editableBook.name;
            inputName.setAttribute('required', true);
            const inputAuthor = document.createElement('input');
            inputAuthor.placeholder = 'Author'
            inputAuthor.value = editableBook.author;
            inputAuthor.setAttribute('required', true);
            const inputImage = document.createElement('input');
            inputImage.placeholder = 'Image'
            inputImage.value = editableBook.image;
            inputImage.setAttribute('required', true);
            const inputPlot = document.createElement('input');
            inputPlot.placeholder = 'Plot'
            inputPlot.value = editableBook.plot;
            inputPlot.setAttribute('required', true);
            const btnWrapper = document.createElement('div');
            btnWrapper.className = 'buttons';
            const cancelBtn = document.createElement('button');
            cancelBtn.innerText = 'cancel';
            cancelBtn.setAttribute('id', 'cancel');
            const appendBtn = document.createElement('button');
            appendBtn.innerText = 'save';
            appendBtn.setAttribute('type', 'submit');
            btnWrapper.appendChild(cancelBtn);
            btnWrapper.appendChild(appendBtn);

            form.appendChild(inputName);
            form.appendChild(inputAuthor);
            form.appendChild(inputImage);
            form.appendChild(inputPlot);
            form.appendChild(btnWrapper);

            dynamicSection.appendChild(form);

            document.querySelector('#cancel').addEventListener('click', () => {
                dynamicSection.innerHTML = '';
            })

            document.querySelector('.form').addEventListener('submit', (e) => {
                e.preventDefault();
                const formElements = document.forms[0].elements;
                const newBook = {
                    id,
                    name: formElements[0].value,
                    author: formElements[1].value,
                    image: formElements[index1].value,
                    plot: formElements[index2].value
                }
                ourBooks[id - 1] = newBook;

                const ourSerializedBooks = JSON.stringify(ourBooks);

                localStorage.setItem('books', ourSerializedBooks)

                renderList(ourBooks);
                dynamicSection.innerHTML = '';
            })
        }

        if (location.hash === '#preview') {

            const bookPreview = ourBooks[id - 1];
            const image = document.createElement('img');
            image.className = 'img';
            image.style.background = `url(${bookPreview.image})`;
            const name = document.createElement('p');
            name.className = 'name';
            name.innerHTML = `<p class="name" id="preview_${bookPreview.id}">${bookPreview.name}</p>`;
            const author = document.createElement('p');
            author.className = 'author';
            author.innerHTML = `<p class="author" id="preview_${bookPreview.id}">${bookPreview.author}</p>`;
            const plot = document.createElement('p');
            plot.className = 'plot';
            plot.innerHTML = `<p class="plot" id="preview_${bookPreview.id}">${bookPreview.plot}</p>`;
            dynamicSection.appendChild(name);
            dynamicSection.appendChild(author);
            dynamicSection.appendChild(plot);
            dynamicSection.appendChild(image);

        }

    }
})
