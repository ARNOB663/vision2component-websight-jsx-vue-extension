import React, { useState, useEffect, useCallback } from "react";
import components from "./components/index.js";

const ITEMS_PER_PAGE = 50;

function ComponentRenderer({ id }) {
  const [Comp, setComp] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setComp(null);
    setError(null);

    // Use explicit path mapping to avoid Vite's glob-based dep scanning.
    // We fetch the module via a direct URL to bypass the EMFILE limit.
    const url = new URL(`./components/Component_${id}.jsx`, import.meta.url).href;
    import(/* @vite-ignore */ url)
      .then((mod) => setComp(() => mod.default || mod.GeneratedComponent))
      .catch((err) => setError(String(err?.message || err)));
  }, [id]);

  if (error) {
    return (
      <div className="p-8 bg-red-50 border border-red-200 rounded m-4">
        <h2 className="text-red-700 font-bold text-lg mb-2">
          Component #{id} - Render Error
        </h2>
        <pre className="text-red-600 text-sm whitespace-pre-wrap">{error}</pre>
      </div>
    );
  }

  if (!Comp) {
    return <div className="p-8 text-gray-400">Loading component #{id}...</div>;
  }

  return <Comp />;
}

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }
  static getDerivedStateFromError(error) {
    return { error };
  }
  componentDidUpdate(prevProps) {
    if (prevProps.resetKey !== this.props.resetKey) {
      this.setState({ error: null });
    }
  }
  render() {
    if (this.state.error) {
      return (
        <div className="p-8 bg-red-50 border border-red-200 rounded m-4">
          <h2 className="text-red-700 font-bold text-lg mb-2">Runtime Error</h2>
          <pre className="text-red-600 text-sm whitespace-pre-wrap">
            {String(this.state.error?.message || "Unknown error")}
          </pre>
        </div>
      );
    }
    return this.props.children;
  }
}

export default function App() {
  const [selectedId, setSelectedId] = useState(null);
  const [page, setPage] = useState(0);
  const [goToInput, setGoToInput] = useState("");

  const totalPages = Math.ceil(components.length / ITEMS_PER_PAGE);
  const startIdx = page * ITEMS_PER_PAGE;
  const pageItems = components.slice(startIdx, startIdx + ITEMS_PER_PAGE);

  const handleGoTo = useCallback(
    (e) => {
      e.preventDefault();
      const id = parseInt(goToInput, 10);
      if (!isNaN(id) && components.includes(id)) {
        setSelectedId(id);
        // Jump to the page containing this component
        const idx = components.indexOf(id);
        setPage(Math.floor(idx / ITEMS_PER_PAGE));
      }
    },
    [goToInput]
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="fixed top-0 left-0 w-64 h-full bg-white border-r border-gray-200 overflow-y-auto z-50">
        <div className="p-4 border-b border-gray-200">
          <h1 className="text-lg font-bold">React Components</h1>
          <p className="text-sm text-gray-500">{components.length} components</p>
        </div>

        {/* Go-to input */}
        <form onSubmit={handleGoTo} className="p-2 border-b border-gray-200">
          <div className="flex gap-1">
            <input
              type="number"
              value={goToInput}
              onChange={(e) => setGoToInput(e.target.value)}
              placeholder="Go to ID..."
              className="flex-1 px-2 py-1 text-sm border border-gray-300 rounded"
            />
            <button
              type="submit"
              className="px-2 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Go
            </button>
          </div>
        </form>

        {/* Pagination controls */}
        <div className="flex items-center justify-between p-2 border-b border-gray-200 text-xs text-gray-500">
          <button
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            disabled={page === 0}
            className="px-2 py-1 bg-gray-100 rounded disabled:opacity-30 hover:bg-gray-200"
          >
            ← Prev
          </button>
          <span>
            Page {page + 1}/{totalPages}
          </span>
          <button
            onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
            disabled={page >= totalPages - 1}
            className="px-2 py-1 bg-gray-100 rounded disabled:opacity-30 hover:bg-gray-200"
          >
            Next →
          </button>
        </div>

        <nav className="p-2">
          {pageItems.map((id) => (
            <button
              key={id}
              onClick={() => setSelectedId(id)}
              className={`w-full text-left px-3 py-2 rounded text-sm mb-1 ${selectedId === id
                  ? "bg-blue-500 text-white"
                  : "hover:bg-gray-100 text-gray-700"
                }`}
            >
              Component #{id}
            </button>
          ))}
        </nav>
      </div>

      {/* Main content */}
      <div className="ml-64">
        {selectedId !== null ? (
          <ErrorBoundary key={selectedId} resetKey={selectedId}>
            <div className="border-b bg-white px-6 py-3 sticky top-0 z-40">
              <span className="text-sm font-medium text-gray-500">
                Viewing: Component #{selectedId}
              </span>
            </div>
            <ComponentRenderer id={selectedId} />
          </ErrorBoundary>
        ) : (
          <div className="flex items-center justify-center h-screen text-gray-400">
            Select a component from the sidebar
          </div>
        )}
      </div>
    </div>
  );
}
