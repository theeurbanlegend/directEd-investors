import { Button } from "@radix-ui/themes"
interface ButtonProps {
    variant?: string;
    size?: string;
    asChild?: boolean;
    children?: React.ReactNode;
}
export const radixBtn:React.FC<ButtonProps> = ({children})=>{
    return (
        <Button>
            {children}
        </Button>
    )
}