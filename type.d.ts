interface Post {
  _id: string;
  title: string;
  content: string;
  name: string;
  author: string;
  author_image: string;
}
interface Reply {
  _id: string;
  comment: string;
  parent_post: string;
  author: string;
  author_image: string;
  name: string;
}
