import { supabase } from "../supabase/client";

// Obtener todos los productos con sus variantes
export const getProducts = async () => {
    const { data: products, error } = await supabase
        .from('products')
        .select('*, variants(*)')
        .order('created_at', { ascending: false });

    if (error) {
        console.error(error.message);
        throw new Error(error.message);
    }

    return products;
};

// Obtener productos filtrados por página y marcas
export const getFilteredProducts = async ({
    page = 1,
    brands = [],
}: {
    page: number;
    brands: string[];
}) => {
    const itemsPerPage = 10;
    const from = (page - 1) * itemsPerPage;
    const to = from + itemsPerPage - 1;

    // Crear la consulta inicial
    let query = supabase
        .from("products")
        .select("*, variants(*)", { count: "exact" })
        .order("created_at", { ascending: false })
        .range(from, to);

    // Filtrar por marcas si es necesario
    if (brands.length > 0) {
        query = query.in("brand", brands);
    }

    // Ejecutar la consulta
    const { data, error, count } = await query;

    // Manejar errores
    if (error) {
        console.error(error.message);
        throw new Error(error.message);
    }

    // Asegurarse de devolver siempre un objeto consistente
    return { data: data || [], count: count || 0 };
};
