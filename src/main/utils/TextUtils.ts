export class TextUtils {
  static titleCase(input: string) {
    const sentence = input.toLowerCase().split(' ')
    for (let i = 0; i < sentence.length; i++) {
      sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1)
    }
    return sentence.join(' ')
  }
}
