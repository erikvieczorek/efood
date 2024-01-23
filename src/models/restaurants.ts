class Restaurants {
  category: string
  description: string
  image: string
  banner: string
  highlight: boolean
  title: string
  id: number
  rate: number

  constructor(
    id: number,
    category: string,
    description: string,
    image: string,
    banner: string,
    highlight: boolean,
    title: string,
    rate: number
  ) {
    this.id = id
    this.category = category
    this.description = description
    this.image = image
    this.banner = banner
    this.highlight = highlight
    this.title = title
    this.rate = rate
  }
}

export default Restaurants
