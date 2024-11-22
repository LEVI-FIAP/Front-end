import Spinner from "@/components/Spinner/Spinner";

export default function Loading() {
  return (
    <div className="flex flex-col gap-10 self-center text-2xl font-bold text-center">
        <Spinner/>
        <h1>Carregando...</h1>
    </div>
  )
}