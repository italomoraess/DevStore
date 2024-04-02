import data from './data.json'

export async function GET() {
  const { products } = data
  return Response.json(products)
}
