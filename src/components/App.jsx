import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function createEntry(entry) {
  return (
    <Entry
      key={entry.id}
      emoji={entry.emoji}
      title={entry.name}
      info={entry.meaning}
    />
  );
}

function Dictionary() {
  return <dl className="dictionary">{emojipedia.map(createEntry)}</dl>;
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <Dictionary />
    </div>
  );
}

export default App;
