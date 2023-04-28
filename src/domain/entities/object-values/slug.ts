export class Slug {
  public value: string

  constructor(value: string) {
    this.value = value
  }

  static createFromText(text: string): Slug {
    const slugText = text
      .normalize('NFKD')
      .toLocaleLowerCase()
      .trim()
      .replace(/\s+/g, '-')
      .replace(/[^\w-]+/g, '')
      .replace(/_/g, '-')
      .replace(/--+/g, '-')
      .replace(/-$/, '')

    return new Slug(slugText)
  }
}
