// Object constructor
function book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function() {
        let text = this.title + " by " + this.author + ", " + 
                    this.pages + " pages, " + this.read
        return(text)
    };
}

// example
let theHobbit = new book("The Hobbit", "J.R.R Tolkien", 295, "not read yet")
theHobbit.info()

function Player(name, marker) {
    this.name = name;
    this.marker = marker;
    this.sayName = function() {
      console.log(this.name)
    };
  }
  
  const player1 = new Player('steve', 'X');
  const player2 = new Player('also steve', 'O');