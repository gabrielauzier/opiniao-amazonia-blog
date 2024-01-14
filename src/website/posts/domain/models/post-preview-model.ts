import { PostModel } from './post-model'

export type PostPreviewModel = Omit<PostModel, 'content'>
