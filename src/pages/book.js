const books = () => {
    const view = `
    <div class="Books-inner">
      <article class="Books-card">
        <img src="image" alt="name">
        <h2>Name</h2>
      </article>
      <article class="Books-card">
        <h3>ISBN:</h3>
        <h3>Title:</h3>
        <h3>Author:</h3>
        <h3>Cant:</h3>
      </article>
    </div>
  `;
    return view;
};

export default books;