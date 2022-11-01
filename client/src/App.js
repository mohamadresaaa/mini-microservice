
import PostCreate from "./postCreate";
import PostList from "./postList";

function App() {
  return (
    <div className="m-5">
      <h1 className="text-xl">Mini microservice blog project</h1>
      <PostCreate />
      <PostList/>
    </div>
  );
}

export default App;
