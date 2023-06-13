const bookTemplate = (books, index) => `
<div class="book">
<p>"${books.title}" by ${books.author}</p>
<button type="button" class="remove" data-index="${index}">Remove</button>
</div>
`;

export default bookTemplate;