import { Document, ObjectId, WithId } from 'mongodb';

export interface Post extends WithId<Document> {
  _id: ObjectId;
  title: string;
  content: string;
  tags: TagType[];
  name: string;
  author: string;
  author_image: string | null;
  created_at: Date;
  like_count: number;
}

export interface Reply {
  _id: ObjectId;
  comment: string;
  parent_post: string;
  author: string;
  author_image: string;
  name: string;
  created_at: Date;
}

export interface TagType {
  tag: string;
  color: string;
}

export type TagFieldPosts = ObjectId[];

export interface TagField {
  _id?: ObjectId;
  tag: string;
  color: string;
  posts: TagFieldPosts;
}
