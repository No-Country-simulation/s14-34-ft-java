import HeadersOne from "@/components/containers/headers/headersOne";
import FormLogin from "@/components/forms/login";
import FootersOne from "@/components/containers/footers/footersOne";
import Foothercopyrigth from "@/components/containers/footers/foothercopyrigth";


export default function page() {
  return (
    <div>
      <HeadersOne />
      <main className="flex min-h-screen flex-col">
        <div><FormLogin /></div>
      </main>
      <FootersOne />
      <Foothercopyrigth />
    </div>
  )
}

