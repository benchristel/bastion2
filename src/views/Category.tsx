import {h} from "preact"
import {ViewParams} from "./view-params"
import {DirectoryLink} from "./DirectoryLink"
import "./Category.less"

type Props = {
  category: ViewParams.Category
}

export function Category({category}: Props) {
  const {title, entries, subCategories} = category
  const uncategorizedLinks = entries.map(directoryLink)

  return (
    <section class="category">
      <h2>{title}</h2>
      <div
        class={
          "columns " + columnClassForLinkCount(countLinks(category))
        }
      >
        {uncategorizedLinks.length > 0 && (
          <section>
            <ul>{uncategorizedLinks}</ul>
          </section>
        )}
        {subCategories.map(({title, entries: subEntries}) => (
          <section>
            <h3>{title}</h3>
            <ul>{subEntries.map(directoryLink)}</ul>
          </section>
        ))}
      </div>
    </section>
  )
}

function columnClassForLinkCount(n: number): string {
  switch (true) {
    case n >= 12:
      return "columns-3"
    case n >= 6:
      return "columns-2"
    default:
      return "columns-1"
  }
}

function directoryLink(link: ViewParams.Link) {
  return <DirectoryLink link={link} />
}

function countLinks(category: ViewParams.Category) {
  return (
    category.entries.length +
    category.subCategories
      .map(({entries}) => entries.length)
      .reduce(add, 0)
  )
}

function add(a: number, b: number): number {
  return a + b
}
