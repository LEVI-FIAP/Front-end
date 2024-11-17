export function generateStaticParams() {

  const relatorioIds = ['1', '2', '3'];

  return relatorioIds.map((id) => ({
    relatorioId: id, 
  }));
}
  

export default async function Usuario({params,}: {params: Promise<{relatorioId: string }>}) {

    const idRelatorio = Number((await params).relatorioId)

    return (
      <div>
        <h1>
             Relatorio: {idRelatorio}
        </h1>
      </div>
    );
  }
  