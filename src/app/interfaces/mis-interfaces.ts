export interface Respuesta {
  status: string;
  totalResults: number;
  articles: Articulo[];
}

export interface Articulo {
  source: Source;
  author?: string;
  title: string;
  description?: string;
  url: string;
  urlToImage?: string;
  publishedAt: string;
  content?: string;
}

export interface Source {
  id?: string;
  name: string;
}