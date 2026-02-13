import React, { useState, useEffect } from "react";
import components from "./components/index.js";

function ComponentRenderer({ id }) {
  const [Comp, setComp] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setComp(null);
    setError(null);
    import(`./components/Component_${id}.jsx`)
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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="fixed top-0 left-0 w-64 h-full bg-white border-r border-gray-200 overflow-y-auto z-50">
        <div className="p-4 border-b border-gray-200">
          <h1 className="text-lg font-bold">React Components</h1>
          <p className="text-sm text-gray-500">{components.length} components</p>
        </div>
        <nav className="p-2">
          {components.map((id) => (
            <button
              key={id}
              onClick={() => setSelectedId(id)}
              className={`w-full text-left px-3 py-2 rounded text-sm mb-1 ${
                selectedId === id
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
          <ErrorBoundary key={selectedId}>
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
