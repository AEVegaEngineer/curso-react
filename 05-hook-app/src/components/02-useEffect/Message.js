import React, {useEffect,useState} from 'react'

export const Message = () => {

    const [Coords, setCoords] = useState({x:0,y:0});
    const {x,y} = Coords;
    /*
    hay que tener mucho cuidado al usar useEffect porque se puede consumir mucha memoria
    al registrar eventos y no hacer procedimientos de limpieza al desmontar el componente
    */
    useEffect(() => {

        const mouseMove = (e) => {
            const coords = {x:e.x, y:e.y};
            //console.log(coords);
            setCoords(coords);
        }

        // obtener las coordenadas de la pantalla cuando el componente este abierto
        window.addEventListener('mousemove', mouseMove);
        console.log('componente montado');
        return () => {
            console.log('componente desmontado');
            window.removeEventListener('mousemove', mouseMove);
        }
    }, []);

    return (
        <div>
            <h3>eres genial</h3>
            <p>
                x: {x}, y: {y}
            </p>
        </div>
    )
}
