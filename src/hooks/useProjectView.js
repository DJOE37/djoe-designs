import { useSearchParams } from "react-router-dom";

export function useProjectView(defaultView = "architectural") {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentView = searchParams.get("view") || defaultView;

  const setView = (view) => {
    setSearchParams({ view });
  };

  return { currentView, setView };
}
