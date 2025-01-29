import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App";
import Users from "../components/Users";

// beforeAll(()=>{
//     console.log("Before all hook........")
// })

// beforeEach(()=>{
//   console.log("Before each hook........")
// })

test('test first react app case', () => {
  render(<App />);
  const text = screen.getByText(/First React Test Case/i);
  const text1 = screen.getByText("Satyam Shukla");
  // const title = screen.getByTitle("Ai image");
  expect(text).toBeInTheDocument();
  expect(text1).toBeInTheDocument();
  // expect(title).toBeInTheDocument();
})

// test('test input box', () => {
//   render(<App />);
//   let checkinput = screen.getByRole('textbox');
//   let checkplaceholder = screen.getByPlaceholderText("Enter your name");
//   expect(checkinput).toBeInTheDocument();
//   expect(checkplaceholder).toBeInTheDocument();
//   expect(checkinput).toHaveAttribute('name', 'username');
//   expect(checkinput).toHaveAttribute('id', 'userId');
//   expect(checkinput).toHaveAttribute('type', 'text');
//   expect(checkinput).toHaveAttribute('value', 'Satyam Shukla');
// })


//test for button click
// test('test button click'), () => {
//   render(<App />)
//   const btn = screen.getByRole('button');
//   fireEvent.click(btn);
//   expect(screen.getByText('Updated Data')).toBeInTheDocument();
// }

// App.spec.js
// App.spec.jsx
// App.test.jsx
// App.test.js
// __test__  //folder

// afterAll(()=>{
//    console.log("___________Afterc All_________")  
// })

// afterEach(()=>{
//   console.log("__________After Each__________")  
// })


// test('snapshot for app component',() => {
//   const container = render(<App />)
//   expect(container).toMatchSnapshot();
// })


test('get by role', () => {
  render(<App />)
  const inputField = screen.getByRole("textbox", { name: 'Your Username' })
  const inputField1 = screen.getByRole("textbox", { name: 'User Name' })
  const inputField2 = screen.getByRole("textbox", { name: 'User Age' })
  const btn1 = screen.getByRole("button", { name: 'click 1' })
  const btn2 = screen.getByRole("button", { name: 'click 2' });
  const div1 = screen.getByRole("dummy");

  console.log("satyamm", inputField)
  expect(inputField).toBeInTheDocument();
  expect(inputField).toHaveValue("satyam")
  expect(inputField1).toBeInTheDocument();
  expect(inputField2).toBeInTheDocument();
  expect(div1).toBeInTheDocument();
})


//testing multiple elements
test('testing with getallbyrole', () => {
  render(<App/>)
  const btns = screen.getAllByRole("button");
  for (const i in btns) {
    expect(btns[i]).toBeInTheDocument();
  }
});

