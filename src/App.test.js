import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('positive_add_test', () => {
    render(<App/>)

    const one = screen.getByText("1")
    const plus = screen.getByText("+")
    const seven = screen.getByText("7")
    const equals = screen.getByText("=")

    fireEvent.click(one);
    fireEvent.click(plus);
    fireEvent.click(seven);
    fireEvent.click(equals);

    let display = document.querySelectorAll('[style="display: inline-block; white-space: nowrap;"]');

    expect(display[0].textContent).toBe("8");
});
test('negative_add_test', () => {
    render(<App/>)

    const two = screen.getByText("2")
    const plus = screen.getByText("+")
    const five = screen.getByText("5")
    const equals = screen.getByText("=")

    fireEvent.click(two);
    fireEvent.click(plus);
    fireEvent.click(five);
    fireEvent.click(equals);

    let display = document.querySelectorAll('[style="display: inline-block; white-space: nowrap;"]');

    expect(display[0].textContent).not.toBe("4");
});

test('positive_sub_test', () => {
    render(<App/>)

    const three = screen.getByText("3")
    const minus = screen.getByText("-")
    const four = screen.getByText("4")
    const equals = screen.getByText("=")

    fireEvent.click(three);
    fireEvent.click(minus);
    fireEvent.click(four);
    fireEvent.click(equals);

    let display = document.querySelectorAll('[style="display: inline-block; white-space: nowrap;"]');

    expect(display[0].textContent).toBe("-1");
});
test('negative_sub_test', () => {
    render(<App/>)

    const five = screen.getByText("5")
    const minus = screen.getByText("-")
    const one = screen.getByText("1")
    const equals = screen.getByText("=")

    fireEvent.click(five);
    fireEvent.click(minus);
    fireEvent.click(one);
    fireEvent.click(equals);

    let display = document.querySelectorAll('[style="display: inline-block; white-space: nowrap;"]');

    expect(display[0].textContent).not.toBe("3");
});

test('positive_mul_test', () => {
    render(<App/>)

    const eight = screen.getByText("8")
    const times = screen.getByText("x")
    const four = screen.getByText("4")
    const equals = screen.getByText("=")

    fireEvent.click(eight);
    fireEvent.click(times);
    fireEvent.click(four);
    fireEvent.click(equals);

    let display = document.querySelectorAll('[style="display: inline-block; white-space: nowrap;"]');

    expect(display[0].textContent).toBe("32");
});
test('negative_mul_test', () => {
    render(<App/>)

    const nine = screen.getByText("9")
    const times = screen.getByText("x")
    const five = screen.getByText("5")
    const equals = screen.getByText("=")

    fireEvent.click(nine);
    fireEvent.click(times);
    fireEvent.click(five);
    fireEvent.click(equals);

    let display = document.querySelectorAll('[style="display: inline-block; white-space: nowrap;"]');

    expect(display[0].textContent).not.toBe("40");
});

test('positive_div_test', () => {
    render(<App/>)

    const nine = screen.getByText("9")
    const dividedBy = screen.getByText("/")
    const five = screen.getByText("5")
    const equals = screen.getByText("=")

    fireEvent.click(nine);
    fireEvent.click(dividedBy);
    fireEvent.click(five);
    fireEvent.click(equals);

    let display = document.querySelectorAll('[style="display: inline-block; white-space: nowrap;"]');

    expect(display[0].textContent).toBe("1.8");
});
test('negative_div_test', () => {
    render(<App/>)

    const three = screen.getByText("3")
    const dividedBy = screen.getByText("/")
    const two = screen.getByText("2")
    const equals = screen.getByText("=")

    fireEvent.click(three);
    fireEvent.click(dividedBy);
    fireEvent.click(two);
    fireEvent.click(equals);

    let display = document.querySelectorAll('[style="display: inline-block; white-space: nowrap;"]');

    expect(display[0].textContent).not.toBe("1");
});


//Extra tests:

test('4.4 divided by 2', () => {
    render(<App/>)

    const point = screen.getByText(".")
    const four = screen.getByText("4")
    const dividedBy = screen.getByText("/")
    const two = screen.getByText("2")
    const equals = screen.getByText("=")

    fireEvent.click(four);
    fireEvent.click(point);
    fireEvent.click(four);
    fireEvent.click(dividedBy);
    fireEvent.click(two);
    fireEvent.click(equals);

    let display = document.querySelectorAll('[style="display: inline-block; white-space: nowrap;"]');

    expect(display[0].textContent).toBe("2.2");
});

test('0.001 plus 1.01', () => {
    render(<App/>)

    const point = screen.getByText(".")
    const one = screen.getByText("1")
    const plus = screen.getByText("+")
    const zero = screen.getAllByText("0")[1]
    const equals = screen.getByText("=")

    fireEvent.click(zero);
    fireEvent.click(point);
    fireEvent.click(zero);
    fireEvent.click(zero);
    fireEvent.click(one);
    fireEvent.click(plus);
    fireEvent.click(one);
    fireEvent.click(point);
    fireEvent.click(zero);
    fireEvent.click(one);
    fireEvent.click(equals);

    let display = document.querySelectorAll('[style="display: inline-block; white-space: nowrap;"]');

    expect(display[0].textContent).toBe("1.011");
});

test('clear test', () => {
    render(<App/>)

    const nine = screen.getByText("9")
    const dividedBy = screen.getByText("/")
    const five = screen.getByText("5")
    const equals = screen.getByText("=")
    const clear = screen.getByText("C")

    fireEvent.click(nine);
    fireEvent.click(dividedBy);
    fireEvent.click(five);
    fireEvent.click(equals);
    fireEvent.click(clear);

    let display = document.querySelectorAll('[style="display: inline-block; white-space: nowrap;"]');

    expect(display[0].textContent).not.toBe("1.8");
});

test('sign toggle test', () => {
    render(<App/>)

    const nine = screen.getByText("9")
    const signToggle = screen.getByText("+-")
    const dividedBy = screen.getByText("/")
    const five = screen.getByText("5")
    const equals = screen.getByText("=")

    fireEvent.click(nine);
    fireEvent.click(signToggle);
    fireEvent.click(dividedBy);
    fireEvent.click(five);
    fireEvent.click(equals);

    let display = document.querySelectorAll('[style="display: inline-block; white-space: nowrap;"]');

    expect(display[0].textContent).toBe("-1.8");
});

test('percentage test', () => {
    render(<App/>)

    const nine = screen.getByText("9")
    const percent = screen.getByText("%")

    fireEvent.click(nine);
    fireEvent.click(percent);

    let display = document.querySelectorAll('[style="display: inline-block; white-space: nowrap;"]');

    expect(display[0].textContent).toBe("0.09");
});
