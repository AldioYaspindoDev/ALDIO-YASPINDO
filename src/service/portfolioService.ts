import { api } from "./api";

export const portfolioService = {
    getAllPortfolio: async() => {
        return await api.get("api/portfolio");
    },

    getPortfolioById: async (id: string) => {
        return await api.get(`api/portfolio/${id}`);
    },

    getPorfolioBySlug: async (slug: string) => {
        return await api.get(`api/portfolio/slug/${slug}`);
    },

    createPortfolio: async (body: string) => {
        return await api.post("api/portfolio", body);
    },

    updatePortfolio: async (id: string, body: string) => {
        return await api.put(`api/portfolio/${id}`, body);
    },

    deletePortfolio: async (id: string) => {
        return await api.delete(`api/portfolio/${id}`);
    }
};