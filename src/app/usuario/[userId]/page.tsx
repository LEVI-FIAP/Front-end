export default async function Usuario({
    params,
  }: {
    params: Promise<{ userId: string }>
  }) {
    const idUser = (await params).userId
    return <div>My Post: {idUser}</div>
  }