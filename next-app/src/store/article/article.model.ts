export interface IArticleDetail {
    title: string;
    publishTime: number;
    cover: string;
    content: string;
    prev: { name: string; title: string };
    next: { name: string; title: string };
}

export interface IArticleListItem extends IArticleDetail {
    name: string;
    labels: string[];
    filePath: string;
}
