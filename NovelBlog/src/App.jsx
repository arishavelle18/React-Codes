import NovelBlog from "./NovelBlog";
function App() {
  const novel = {
    title: "Harry Potter",
    author: "J.K. ROwling",
    description: "A word full of wizards and magic",
    type: "Fiction",
  };
  return (
    <>
      <div className="app">
        <NovelBlog
          title={novel.title}
          author={novel.author}
          description={novel.description}
          type={novel.type}
        />
      </div>
    </>
  );
}

export default App;
