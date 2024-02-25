interface Post {
  _id: string;
  title: string;
  content: string;
  author: string;
}
interface Reply {
  _id: string;
  comment: string;
  parent_post: string;
  author: string;
}

interface UserData {
  name: string;
  email: string;
}
