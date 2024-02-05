import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { postAdded } from "./postSlice";
import { selectUser } from "../users/userSlice";

const AddNewPost = () => {
  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");
  const [userid, setUserid] = React.useState("");

  const users = useSelector(selectUser);

  const dispatch = useDispatch();

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);
  const onUserChanged = (e) => setUserid(e.target.value);

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(postAdded(title, content, userid));
      setTitle("");
      setContent("");
    }
  };

  const cansave = Boolean(title) && Boolean(content) && Boolean(userid);

  const userOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  return (
    <div>
      <section>
        <h2>Add a New Post</h2>
        <form>
          <label htmlFor="postTitle">Post Title:</label>
          <input
            type="text"
            id="postTitle"
            name="postTitle"
            value={title}
            onChange={onTitleChanged}
          />
          <label htmlFor="postUser">Author:</label>
          <select id="postUser" value={userid} onChange={onUserChanged}>
            <option value="">Select User</option>
            {userOptions}
          </select>
          <label htmlFor="postContent">Content:</label>
          <textarea
            id="postContent"
            name="postContent"
            value={content}
            onChange={onContentChanged}
          />
          <button onClick={onSavePostClicked} type="button" disabled={!cansave}>
            Add Post
          </button>
        </form>
      </section>
    </div>
  );
};

export default AddNewPost;
