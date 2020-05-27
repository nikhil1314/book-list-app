//book class:represent a book
class book{
    constructor(title,author,isbn){
        this.title=title;
        this.author=author;
        this.isbn=isbn;

    }
}

// ui class: handle ui tasks
class ui{
    static displaybooks(){
        const storedbooks=[
            {
                title:'book one',
                author:'jane doe',
                isbn:'3434343'
            },
            {
                title:'book two',
                author:'jane down',
                isbn:'36363633'

            }
        ];
        const books=storedbooks;
        books.forEach((book)=> ui.addbooktolist(book));

        }
        static addbooktolist(book){
            const list=document.querySelector('#book-list');
            const row=document.createElement('tr');
            row.innerHTML=`
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href="#"class="btn btn-danger btn-sm delete">X</td>`;
            list.appendChild(row);
        }

        static deletebook(el){
            if(el.classList.contains('delete')){
                el.parentElement.parentElement.remove();
            }
        }

        static showalert(message, classname){
        const div=document.createElement('div');
        div.classname=`alert alert-${classname}`;
        div.appendChild(document.createTextNode(message));
        const container=document.querySelector('.container');
        const form=document.querySelector('#book-form');
        container.insertBefore(div, form);
        //make in vanish 3 seconds
        setTimeout(() => document.querySelector('.alert').remove(),3000);
        }

    //clear fields
    static clearfields() {
        document.querySelector('#title').value='';
        document.querySelector('#author').value='';

        document.querySelector('#isbn').value='';


    }
}

//stor class: handles storage


//event: display books
document.addEventListener('DOMContentLoaded',ui.displaybooks);

//event:add a book
document.querySelector('#book-form').addEventListener('submit', (e) => {

    //prevent default
    e.preventDefault();

    //get from values
    const title=document.querySelector('#title').value;
    const author=document.querySelector('#author').value;
    const isbn=document.querySelector('#isbn').value;

    //validation
    if(title===''|| author==='' || isbn===''){
       ui.showalert('fill in the all  fields', 'info');
    } 
    else{
         //instiation book
    const Book = new book(title,author,isbn);

    //add book to list
    ui.addbooktolist(Book);

    //clear fields
    ui.clearfields();

    }
});

//event: remove a book
document.querySelector('#book-list').addEventListener('click', (e)=> {
    ui.deletebook(e.target)
});
