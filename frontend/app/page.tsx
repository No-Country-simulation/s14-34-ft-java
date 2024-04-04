import FootersOne from "@/components/containers/footers/footersOne";
import HeadersOne from "@/components/containers/headers/headersOne";
import FormLogin from "@/components/forms/login";
import Loading from "@/app/loading"


export default function Home() {
  return (
    <div>
      <HeadersOne />
      <main className="flex min-h-screen flex-col items-center justify-between p-24 gap-2">
        <div className="p-2 m-2 mb-2">
          <Loading />
        </div>
      </main>
      <FootersOne />
    </div>
  );
}
