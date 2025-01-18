import Button from "@/components/button";
import { render, fireEvent } from "@testing-library/react";

describe("Button", () => {
  it("should render the button and match snapshot", () => {
    const handleClick = jest.fn();
    const { container } = render(
      <Button title="Click" bg="bg-red-500" onClick={handleClick} />
    );
    expect(container).toMatchSnapshot();
  });

  it("should trigger onClick when button is clicked", () => {
    const handleClick = jest.fn();
    const { getByText } = render(
      <Button title="Click" bg="bg-blue-500" onClick={handleClick} />
    );
    const button = getByText("Click");
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("should render button with title", () => {
    const { getByText } = render(<Button title="Submit" bg="bg-yellow-500" />);
    expect(getByText("Submit")).toBeInTheDocument();
  });
});
