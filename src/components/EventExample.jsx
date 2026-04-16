function EventExample() {
  const handleClick = () => {
    console.log('Button was clicked!');
    alert('You clicked the button');
  };
  const handleInput =(event) =>{
    console.log('Input value: ', event.target.value);
  };
  const handleItemClick = (itemId) =>{
    alert('You clicked item: '+ itemId)
  };
  return(
    <div>
        <h3>Event Example</h3>

        <button onClick={handleClick}>Click Me</button>
    <input 
    onChange={handleInput}
    placeholder="Type something and check console"
    />
    <button onClick={() => handleItemClick(123)}>Item 123</button>
    <button onClick={() =>handleItemClick(456)}>
        Item 456
    </button>

    <form on onSubmit={(e) =>{
        e.preventDefault();
        alert('Form submitted!');
    }}>
        <button type="submit">Submit Form</button>
    </form>
    </div>
  );
}
export default EventExample;