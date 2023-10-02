export namespace Raw {
  export type Config = {
    menu?: string,
    searchProviders?: string,
    directory?: Array<Category>
  }

  export type Category = {
    title: string
    keywords?: string
    entries?: string
    subCategories?: Array<LeafCategory>,
  }

  export type LeafCategory = {
    title: string
    keywords?: string
    entries?: string
  }
}

export namespace Parsed {
  export type Config = {
    menu: Array<Link>
    searchProviders: Array<SearchProvider>
    directory: Array<Category>
  }
  
  export type Link = {
    destination: string
    text: string
  }
  
  export type SearchProvider = {
    name: string,
    searchUrlFormat: string,
  }
  
  export type Category = {
    title: string
    entries: Array<Entry>
    subCategories: Array<LeafCategory>
  }
  
  export type LeafCategory = {
    title: string
    entries: Array<Entry>
  }
  
  export type Entry = {
    link: Link
    keywords: Array<string>
  }  
}