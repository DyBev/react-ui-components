import { render, screen } from '@testing-library/react';
import { Button, ButtonProps } from '../../src/Button/Button';

describe("Button", () => {
  let props: ButtonProps;

  beforeEach(() => {
    props = {
      text: "button text",
    }
  });

  it("should render", () => {
    render(<Button {...props}/>)
    expect(screen.getByText("button text")).toBeInTheDocument()
  });
})
