import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import type { LinksFunction } from "remix";
import { ScrollRestoration, useCatch } from "remix";
import { Links, LiveReload, Outlet, Meta, Scripts } from "remix";
import MobileNavigation from "./components/layout/MobileNavigation";
import SideNavigation from "./components/layout/SideNavigation";
import styles from "./styles/app.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};

export default function App() {
  return (
    <Document>
      <Layout>
        <Outlet />
      </Layout>
    </Document>
  );
}

function Document({
  children,
  title = `Remix: So great, it's funny!`,
}: {
  children: React.ReactNode;
  title?: string;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        {title ? <title>{title}</title> : null}
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}

function Layout({ children }: React.PropsWithChildren<{}>) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="min-h-full">
      {/* Mobile navigation */}
      <MobileNavigation isOpen={sidebarOpen} onClose={setSidebarOpen} />
      {/* Static sidebar for desktop */}
      <SideNavigation />
      <main className="lg:pl-72 h-screen relative">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="rounded-full absolute top-4 right-4 lg:hidden bg-blue-400 p-2 z-50"
        >
          {sidebarOpen ? (
            <HiX className="h-6 w-6 text-white" />
          ) : (
            <HiMenu className="h-6 w-6 text-white" />
          )}
        </button>
        {children}
      </main>
    </div>
  );
}

export function CatchBoundary() {
  let caught = useCatch();

  let message;
  switch (caught.status) {
    case 401:
      message = (
        <p>
          Oops! Looks like you tried to visit a page that you do not have access
          to.
        </p>
      );
      break;
    case 404:
      message = (
        <p>Oops! Looks like you tried to visit a page that does not exist.</p>
      );
      break;

    default:
      throw new Error(caught.data || caught.statusText);
  }

  return (
    <Document title={`${caught.status} ${caught.statusText}`}>
      <Layout>
        <h1>
          {caught.status}: {caught.statusText}
        </h1>
        {message}
      </Layout>
    </Document>
  );
}

export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error);
  return (
    <Document title="Error!">
      <Layout>
        <div>
          <h1>There was an error</h1>
          <p>{error.message}</p>
          <hr />
          <p>
            Hey, developer, you should replace this with what you want your
            users to see.
          </p>
        </div>
      </Layout>
    </Document>
  );
}
