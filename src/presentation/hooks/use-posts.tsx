import { PostModel } from '@/domain/models'
import { api } from '@/main/services/api'
import next from 'next'

namespace FetchPosts {
  export interface Params {
    limit?: number
  }
  export interface Result {
    posts: PostModel[]
    total: number
  }
}

export async function getAllPosts({
  limit,
}: FetchPosts.Params): Promise<FetchPosts.Result> {
  const url =
    'http://localhost:2998/posts?' +
    new URLSearchParams({
      _limit: String(limit),
    })

  const data = await fetch(url, { next: { revalidate: 60 } }).then((res) =>
    res.json(),
  )

  return {
    posts: data ?? [],
    total: data.length ?? 0,
  }
}

namespace FetchSinglePost {
  export interface Params {
    slug: string
  }
  export interface Result {
    post: PostModel
  }
}

export async function getSinglePost({
  slug,
}: FetchSinglePost.Params): Promise<FetchSinglePost.Result> {
  // const { data } = await api.get('/posts', { params: { slug } })

  const url =
    'http://localhost:2998/posts?' +
    new URLSearchParams({
      slug,
    })

  const data = await fetch(url).then((res) => res.json())

  return {
    post: data[0],
  }
}
