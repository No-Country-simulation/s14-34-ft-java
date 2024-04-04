
import Nav from "@/components/containers/navs/nav";

export default function HeadersOne() {
    return (
        <div className='flex flex-row w-full gap-2'>
            <div>
                Logo
            </div>
            <div>
                <Nav />
            </div>
        </div>
    )
}
