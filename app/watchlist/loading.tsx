import { Skeleton } from "@/components/ui/skeleton"

const loading = () => {
  const arrayEmpty = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[1400px] flex-col items-start gap-2">
        <Skeleton className="h-[40px] w-[300px]" />
      </div>
    </section>
  )
}

export default loading
