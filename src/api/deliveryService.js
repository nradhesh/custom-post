import axios from 'axios';

const API_URL = process.env.API_URL || 'http://localhost:5000/api';

export const createDelivery = async (address) => {
    const response = await axios.post(`${API_URL}/deliveries`, { address });
    return response.data;
};

export const getDelivery = async (id) => {
    const response = await axios.get(`${API_URL}/deliveries/${id}`);
    return response.data;
};

export const updateTimeSlot = async (id, timeSlot) => {
    await axios.put(`${API_URL}/deliveries/${id}/timeslot`, { timeSlot });
};
