import axios from 'axios';

export const getProperties = async () => {
    try {
        const response = await axios.post("https://talent.ender.com/fe-challenge/properties", { token: `${process.env.REACT_APP_TOKEN}` });
        return response.data;
    } catch (error) {
        console.log(error.response.data);
    }
}

export const getPropertyByID = async (id) => {
    try {
        const response = await axios.post(`https://talent.ender.com/fe-challenge/properties/${id}/leases`, { token: `${process.env.REACT_APP_TOKEN}` });
        return response.data;
    } catch (error) {
        console.log(error.response.data);
    }
}