import { ReactNode } from "react";

type Props = {
    children: ReactNode;
}
export const Container = ({ children }: Props) => {
    return (
        <div className="w-full md:max-w-7xl max-w-md mx-auto px-4">
            {children}
        </div>
    )
}