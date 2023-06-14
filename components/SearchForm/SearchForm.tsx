import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const SearchForm = (props: any) => {
  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input type="text" placeholder="Search Movies or TV shows" />
      <Button type="submit">Search</Button>
    </div>
  )
}

export default SearchForm
