"use client";
import { Input } from "@/components/ui/input";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

const Search = ({ placeholder }: { placeholder: string }) => {
  const pathname = usePathname();
  const { replace } = useRouter();

  const searchParams = useSearchParams();

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 500);

  return (
    <div className="flex gap-4 w-full items-center">
      <span className="font-bold text-xl">جستجو</span>
      <Input
        className="font-primary-regular text-lg py-5 lg:py-6"
        placeholder={placeholder}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        defaultValue={searchParams.get("query")?.toString()}
      />
    </div>
  );
};

export default Search;
