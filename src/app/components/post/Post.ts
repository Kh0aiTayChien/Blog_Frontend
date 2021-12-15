export class Post {
  id?: string;
  title?: string;
  image?: string;
  content_post?: string;
  // comments: Array<Comment>;
  category_id?: string;
  // tags: Array<string>;
  access_modifier?: Boolean;
  user_id?: string;
  views?: number;
}
