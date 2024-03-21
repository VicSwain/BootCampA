// Assemble: Create/select DOM elements
var rootEl = $('#root');

rootEl.children('ul').children().addClass("boxes").css('background-color' , 'white');
console.log (rootEl);

// TODO: Starting from the root element, `rootEl`, make all the background color for each box white.

// TODO: Starting from `rootEl`, create the jQuery statement that will add "O" to block the "X" from winning
rootEl.children().eq(8).append($('<li>X</li>'));