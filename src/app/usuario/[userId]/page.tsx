export function generateStaticParams() {

    const userIds = ['1', '2', '3'];
  
    return userIds.map((id) => ({
      userId: id, 
    }));
  }
  

export default async function Usuario({
    params,
  }: {
    params: Promise<{ userId: string }>
  }) {
    const idUser = (await params).userId
    return <div>My Post: {idUser}</div>
  }