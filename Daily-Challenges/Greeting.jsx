function Greeting({ name = "Guest", timeOfDay }) {
    let message;
    if (timeOfDay === "morning") {
        message = "Good morning! Hope your day is great!";
    } else if (timeOfDay === "afternoon") {
        message = "Good afternoon! Keep going!";
    } else {
        message = "Good evening! Time to relax!";
    }

    return (
        <div>
            <h2>Hello, {name}!</h2>
            <p>{message}</p>
        </div>
    );
}

export default Greeting;