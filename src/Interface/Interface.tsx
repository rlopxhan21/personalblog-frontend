export interface BlogDataType {
    count: number,
    next: string | null, 
    previous: string | null, 
    results: ResultDataType[],

}

export interface ResultDataType {
    id: number, 
    active: boolean,
    slug: string, 
    title: string,
    header: string, 
    imagefield: string,
    body: string, 
    created: string,
    updated: string,
    author: number,
    commented_post: CommentedDataType[]
}

export interface CommentedDataType {
    id: number, 
    body: string,
    post: number, 
    active: boolean,
    created: string,
    updated: string, 
}