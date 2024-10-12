"use client";

import ReduxProvider from "./redux-provider";
import AuthUpdater from "./auth-updater";
import AuthViewer from "@/components/auth-viewer";

export default function Home() {
  return (
    <ReduxProvider>
      <main className="w-full h-screen grid grid-cols-2 place-items-center">
        <AuthUpdater />
        <AuthViewer />
      </main>
    </ReduxProvider>
  );
}
