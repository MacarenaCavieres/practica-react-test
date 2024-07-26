// const newMessage = {
//     message: "Hola mundo",
//     title: "New World",
// };

// const getResult = (a, b) => {
//     return a + b;
// };

import PropTypes from "prop-types";

export const FirstApp = ({ title, subtitle }) => {
    return (
        <>
            <h1>Hola mundo</h1>
            {/* <code>{JSON.stringify(newMessage)}</code> */}
            {/* <h3>{getResult(4, 8)}</h3> */}
            <h4>{title}</h4>
            <h4>{subtitle + 3}</h4>
            <p>Primer componente</p>
        </>
    );
};

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.number.isRequired,
};

// FirstApp.defaultProps = {
//     title: "No hay titulo",
//     subtitle: "de nuevo no hay subtitulo",
// };
