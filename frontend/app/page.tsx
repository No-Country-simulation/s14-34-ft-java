import FootersOne from "@/components/containers/footers/footersOne";
import HeadersOne from "@/components/containers/headers/headersOne";

export default function Home() {
  return (
    <div>
      <HeadersOne />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div>
          <h1>Home </h1>
        </div>
      </main>
      <FootersOne />
    </div>

  );
}
