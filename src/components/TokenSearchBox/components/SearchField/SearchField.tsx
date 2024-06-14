"use client";

import React, { ChangeEvent } from "react";
import { StyledInputBase } from "@/components/TokenSearchBox/components/StyledInputBase";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { InputSearchIcon } from "@/components/TokenSearchBox/components/InputSearchIcon";
import { Search } from "@/components/TokenSearchBox/components/Search";

export function SearchField() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function handleSearch(e: ChangeEvent<HTMLInputElement>) {
    const term = e.target.value;
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <Search>
      <InputSearchIcon />
      <StyledInputBase
        placeholder={"Search for Tokens"}
        inputProps={{ "aria-label": "search" }}
        autoFocus
        defaultValue={searchParams.get("query")?.toString()}
        onChange={handleSearch}
        data-testid={"searchInput"}
      />
    </Search>
  );
}
