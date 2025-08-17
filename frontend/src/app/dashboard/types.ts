export interface Feed {
  version: string;
  title: string;
  home_page_url: string;
  description: string;
  feed_url: string;
  items: FeedItem[];
}

export interface FeedItem {
  title: string;
  url: string;
  content_html: string;
  date_published: string; // ISO8601 文字列
  attachments?: Attachment[];
  tags?: string[];
  authors?: Author[];
  id: string;
}

export interface Attachment {
  size_in_bytes: number;
  mime_type: string;
  url: string;
}

export interface Author {
  name: string;
}
