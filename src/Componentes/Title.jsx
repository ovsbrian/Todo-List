import { Logo } from "./Logo"

export const Title = ({children}) =>{
    return(
        <>
        <div className="flex justify-center gap-4">
            <Logo/>
            <span className="text-4xl font-medium">{children}</span>
        </div>
        </>
    )
}