export namespace ISubscribeNewsletter {
  export interface Params {
    email: string
  }
  export interface Result {
    confirmationEmailSent: boolean
  }
}

export interface AbstractSubscribeNewsletterUsecase {
  execute(
    params: ISubscribeNewsletter.Params,
  ): Promise<ISubscribeNewsletter.Result>
}
