// const newMessage = {
//     message: "Hola mundo",
//     title: "New World",
// };

const getResult = (a, b) => {
    return a + b;
};

export const FirstApp = () => {
    return (
        <>
            <h1>Hola mundo</h1>
            {/* <code>{JSON.stringify(newMessage)}</code> */}
            <h3>{getResult(4, 8)}</h3>
            <p>Primer componente</p>
        </>
    );
};
