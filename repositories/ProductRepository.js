import Repository, { baseUrlProduct, serializeQuery } from './Repository';

export async function getTotalRecords() {
    const reponse = await Repository.get(`${baseUrlProduct}/products/count`)
        .then((response) => {
            return response.data;
        })
        .catch((error) => ({ error: JSON.stringify(error) }));
    return reponse;
}

export async function getProductsByIds(payload) {
    const endPoint = `${baseUrlProduct}/products?${payload}`;
    const reponse = await Repository.get(endPoint)
        .then((response) => {
            return {
                items: response.data,
                totalItems: response.data.length,
            };
        })

        .catch((error) => ({ error: JSON.stringify(error) }));
    return reponse;
}

class ProductRepository {
    constructor(callback) {
        this.callback = callback;
    }

    async getProducts(params) {
        const reponse = await Repository.get(
            `${baseUrlProduct}/products?${serializeQuery(params)}`
        )
            .then((response) => {
                return {
                    items: response.data,
                    totalItems: response.data.length,
                };
            })

            .catch((error) => ({ error: JSON.stringify(error) }));
        return reponse;
    }

    async getProductsById(payload) {
        const reponse = await Repository.get(
            `${baseUrlProduct}/products/${payload}`
        )
            .then((response) => {
                return response.data;
            })
            .catch((error) => ({ error: JSON.stringify(error) }));
        return reponse;
    }

    async getProductCategories() {
        const reponse = await Repository.get(
            `${baseUrlProduct}/product-categories`
        )
            .then((response) => {
                return response.data;
            })
            .catch((error) => ({ error: JSON.stringify(error) }));
        return reponse;
    }

    async getPrductCategoryBySlug(payload) {
        const reponse = await Repository.get(
            `${baseUrlProduct}/product-categories?slug=${payload}`
        )
            .then((response) => {
                if (response.data && response.data.length > 0) {
                    return {
                        data: response.data[0],
                        products: response.data[0].products,
                    };
                } else {
                    return null;
                }
            })
            .catch((error) => {
                console.log(JSON.stringify(error));
                return null;
            });
        return reponse;
    }

    async getProductsByPriceRange(payload) {
        const reponse = await Repository.get(
            `${baseUrlProduct}/products?${serializeQuery(payload)}`
        )
            .then((response) => {
                return response.data;
            })
            .catch((error) => ({ error: JSON.stringify(error) }));
        return reponse;
    }
}

export default new ProductRepository();
