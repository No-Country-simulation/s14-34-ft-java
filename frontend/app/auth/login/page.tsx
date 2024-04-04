import HeadersOne from "@/components/containers/headers/headersOne";
import FormLogin from "@/components/forms/login";
import FootersOne from "@/components/containers/footers/footersOne";

export default function page() {
  return (
    <div>
    <HeadersOne />
    <main className="flex min-h-screen flex-col items-center justify-between p-24 gap-2">
      <div className="p-2 m-2 mb-2">
        <div className="mb-6">
          <FormLogin />
        </div>
        
      </div>
    </main>
    <FootersOne />
  </div>
  )
}
