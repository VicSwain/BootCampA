const Reader = require('./Reader');
const Book = require('./Book');
const LibraryCard = require('./LibraryCard');

Reader.hasOne(LibraryCard, {
  foreignKey: 'reader_id',
  onDelete: 'CASCADE',
});

LibraryCard.belongsTo(Reader, {
  foreignKey: 'reader_id',
});

Book.belongsTo(Reader,  {
  foreignKey: 'reader_id',
})

Reader.hasMany(Book, {
  f
})
module.exports = { Reader, Book, LibraryCard };
