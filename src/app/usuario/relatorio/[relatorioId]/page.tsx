
  export default async function Usuario({params}: {params: {relatorioId: number }}) {


    return (
      <div>
        <h1>
             Relatorio: {params.relatorioId}
        </h1>
      </div>
    );
  }
  