import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080/api';

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export interface Profile {
  name: string;
  title: string;
  bio: string;
  imageUrl: string;
}

export interface Experience {
  id: number;
  company: string;
  position: string;
  period: string;
  description: string[];
}

export interface Skill {
  id: number;
  category: string;
  skills: string[];
}

export const profileService = {
  getProfile: () => api.get<Profile>('/profile').then(res => res.data),
};

export const experienceService = {
  getExperiences: () => api.get<Experience[]>('/experiences').then(res => res.data),
};

export const skillsService = {
  getSkills: () => api.get<Skill[]>('/skills').then(res => res.data),
};