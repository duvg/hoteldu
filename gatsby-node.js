exports.createPages = async ({ actions, graphql, repoter}) => {
    const result = await graphql(`
        query {
            allDatoCmsHabitacion {
                nodes {
                    slug
                }
            }
        }
    `);



    if(result.errors) {
        reporter.panic('no hay resultados', resultado.errors);
    }

    // Si hay paginas, crear los archivos
    const habitaciones = result.data.allDatoCmsHabitacion.nodes;

    habitaciones.forEach(habitacion => {
        actions.createPage({
            path: habitacion.slug,
            component: require.resolve('./src/components/habitaciones.js'),
            context: {
                slug: habitacion.slug
            }
        });
    });

}