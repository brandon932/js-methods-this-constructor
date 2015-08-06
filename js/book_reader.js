var exampleBook = ['any', 'array', 'of', 'text', 'is', 'a', 'book', 'to', 'us'];
var shortExampleBook = ['this', 'is', 'short'];

function BookReader(book) {
  this.book = book;
  this.currentPage = 0;
}

BookReader.prototype.nextPage = function() {
  if (this.currentPage < (this.book.length -1)){
    this.currentPage ++  ;
  return this.book[this.currentPage];
  }else{
    return this.book[this.currentPage];
  }
};

BookReader.prototype.previousPage = function() {
  if(this.currentPage > 1){
    this.currentPage -- ;
    return this.book[this.currentPage];
  }else{
    return this.book[this.currentPage];
  }
};

BookReader.prototype.pagesLeft = function() {
    return (this.book.length - (this.currentPage +1));
};

BookReader.prototype.encouragement = function() {
  if (this.currentPage !== this.book.length -2){
    return  ("Keep going, only "+ reader.pagesLeft() +" pages left after this one!");

  }else{
    return("Keep going, this book is good 'til the last drop!");
  }

};
var reader = new BookReader(shortExampleBook);
//

// DO NOT MODIFY BELOW THIS COMMENT

module.exports = BookReader;
