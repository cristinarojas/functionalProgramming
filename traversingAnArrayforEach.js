// foreach: This iterates over a list and applies some operation
// with side effects to each list member (example: saving every list item to the database)

var names = ['Cristina', 'Efrain', 'Karolina'];
  
names.forEach(function(item) {
    console.log(item);
});

// Output
// Cristina
// Efrain
// Karolina