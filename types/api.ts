export type NewsData = {
  url: string
  // slug: string
  image: string
  title: string
  softTitle?: string
  createdAt?: string
}

export type UserData = {
  // slug: string
  image: string
  name: string
}

export type CommentData = {
  commentText: string
  userData: UserData
  commentId?: string
  createdAt?: string
}

export type NewsProps = {
  url: string
  // slug: string
  newsData: NewsData
  userData: UserData
  likes?: [UserData]
  comments?: CommentData[]
}
export type UserProps = {
  email: string
  // slug: string
  userData: UserData
  likes?: [NewsData]
}
