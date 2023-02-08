const getTheTitles = function(books) {
    newArray = books.map(
        function(book){
            return book.title;
        }
    );

    return newArray;

    //Fast way to do it below
    //return books.map((book) => book.title);
};

// Do not edit below this line
module.exports = getTheTitles;
