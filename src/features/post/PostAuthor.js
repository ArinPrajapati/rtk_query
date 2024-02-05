import { useSelector } from "react-redux";
import { selectUser } from "../users/userSlice";

const PostAuthor = ({ userId }) => {
  const users = useSelector(selectUser);

  const author = users.find((user) => user.id === userId);
  if (author) console.log(author);
  if (!author) console.log("author not found" + userId);
  return <span>by {author ? author.name : "Unknown author"}</span>;
};

export default PostAuthor;
