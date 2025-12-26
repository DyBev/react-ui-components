export type ButtonProps = {
  text: string;
}

export const Button = ({ text }: ButtonProps) => (
  <button>{text}</button>
)
