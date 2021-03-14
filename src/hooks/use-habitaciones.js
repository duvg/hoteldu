import { graphql, useStaticQuery } from 'gatsby';


const useHabitaciones = () => {

    const data = useStaticQuery(graphql`
        query {
            allDatoCmsHabitacion {
                nodes {
                    titulo
                    contenido
                    id
                    slug
                    imagen {
                        gatsbyImageData (
                            width: 1000,
                            placeholder: BLURRED,
                            forceBlurhash: false,
                        )
                    }
                }
            }
        }
    `);

    return data.allDatoCmsHabitacion.nodes.map(habitacion => ({
        titulo: habitacion.titulo,
        id: habitacion.id,
        contenido: habitacion.contenido,
        imagen:  habitacion.imagen,
        slug: habitacion.slug,
    }));
}

export default useHabitaciones;
