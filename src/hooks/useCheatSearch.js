import { useMemo, useState } from "react";

import { normalizeText } from "../utils/normalizeText.js";

function getSearchText(cheat) {
  const snippets = cheat.codeSnippets.flatMap((snippet) => [
    snippet.title,
    snippet.description,
    snippet.code,
    snippet.explanation,
  ]);

  return [
    cheat.title,
    cheat.category,
    cheat.level,
    ...cheat.tags,
    cheat.summary,
    cheat.whenToUse,
    ...cheat.do,
    ...cheat.dont,
    ...snippets,
    cheat.commonMistake,
    cheat.interviewQuestion,
    cheat.interviewAnswer,
    cheat.courseReference.course,
    cheat.courseReference.project,
    cheat.courseReference.repoFolder,
    cheat.courseReference.notes,
  ]
    .map(normalizeText)
    .join(" ");
}

export function useCheatSearch(cheats) {
  const [query, setQuery] = useState("");
  const normalizedQuery = normalizeText(query);

  const searchableCheats = useMemo(
    () =>
      cheats.map((cheat) => ({
        cheat,
        searchText: getSearchText(cheat),
      })),
    [cheats],
  );

  const results = useMemo(() => {
    if (!normalizedQuery) {
      return cheats;
    }

    const queryTerms = normalizedQuery.split(/\s+/).filter(Boolean);

    return searchableCheats
      .filter(({ searchText }) =>
        queryTerms.every((term) => searchText.includes(term)),
      )
      .map(({ cheat }) => cheat);
  }, [cheats, normalizedQuery, searchableCheats]);

  return {
    query,
    results,
    resultCount: results.length,
    setQuery,
  };
}

export default useCheatSearch;
