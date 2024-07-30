// const newMessage = {
//     message: "Hola mundo",
//     title: "New World",
// };

// const getResult = (a, b) => {
//     return a + b;
// };

import PropTypes from "prop-types";

export const FirstApp = ({ title = "no hay titulo", subtitle = "No hay subtitulo" }) => {
    return (
        <>
            <h2>Hola mundo</h2>
            {/* <code>{JSON.stringify(newMessage)}</code> */}
            {/* <h3>{getResult(4, 8)}</h3> */}
            <h1 data-testid="test-title">{title}</h1>
            <h4>{subtitle}</h4>
            <h4>{subtitle}</h4>
            <p>Primer componente</p>
        </>
    );
};

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    // subtitle: PropTypes.string.isRequired,
};

// FirstApp.defaultProps = {
//     title: "No hay titulo",
//     subtitle: "de nuevo no hay subtitulo",
// };
