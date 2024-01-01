import Header from "./header";

export default function Page({children}) {
    return (
        <>
        <Header />
        <main>{children}</main>
        </>
    )
}