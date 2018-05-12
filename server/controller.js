let books = [
    {
        id: 1,
        author: 'Carl Jung',
        title: 'The Red Book',
        cover: 'https://images-na.ssl-images-amazon.com/images/I/51OU5eX1UhL._SX376_BO1,204,203,200_.jpg',
        read: true

    },

    {
        id: 2,
        author: 'Marcus Aurelius',
        title: 'Meditations',
        cover: 'https://images-na.ssl-images-amazon.com/images/I/51cQEdN9KuL._SX331_BO1,204,203,200_.jpg',
        read: true
    },

    {
        id: 3,
        title: "Crime and Punishment",
        author: "Fyodor Dostoyevsky",
        cover: "https://images-na.ssl-images-amazon.com/images/I/5157Xn%2BsKiL._SY346_.jpg",
        read: true
    },

    {
        id: 4,
        title: "How To Win Friends and Influence People",
        author: "Dale Carnegie",
        cover: "https://images-na.ssl-images-amazon.com/images/I/51NVtjOrnqL.jpg",
        read: true
    },

    {
        id: 5,
        title: "Catch-22",
        author: "Joseph Heller",
        cover: "https://images-na.ssl-images-amazon.com/images/I/51VIjrEJtaL._SY346_.jpg",
        read: true
    },

    {
        id: 6,
        title: "World War Z: An Oral History of the Zombie War",
        author: "Max Brooks",
        cover: "https://images-na.ssl-images-amazon.com/images/I/51QTf-0eQWL.jpg",
        read: true
    },

    {
        id: 7,
        title: "The Road",
        author: "Cormac McCarthy",
        cover: "https://images-na.ssl-images-amazon.com/images/I/41t25tFQJ4L.jpg",
        read: true
    },

    {
        id: 8,
        title: "Rich Dad Poor Dad",
        author: "Robert T. Kiyosaki",
        cover: "https://images-na.ssl-images-amazon.com/images/I/51zcMqY7GQL.jpg",
        read: true
    },

    {
        id: 9,
        title: "The Brothers Karamazov",
        author: "Fyodor Dostoevsky",
        cover: "https://images-na.ssl-images-amazon.com/images/I/51Z63N4f2nL._SY346_.jpg",
        read: true
    }
];

module.exports = {
    addBook(req, res) {
        const { id, author, title, cover } = req.body
        books.push({
            id: books.length + 1,
            author: author,
            title: title,
            cover: cover
        });
        res.status(200).json( books )

    },

    read(req, res) {
        res.status(200).json( books );
    },

    updateBook(req, res) {
        const {id} = req.params
        editIndex = books.findIndex(e => e.id == id);
        books[editIndex].read = !books[editIndex].read;
        res.status(200).json( books );
    },

    deleteBook(req, res) {
        const deleteID = req.params.id;
        bookIndex = books.findIndex(e => e.id == deleteID );
        books.splice(bookIndex,1);
        res.status(200).json( books );
    }

    
}
