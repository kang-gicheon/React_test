// 회원 인증에 필요한 api 사용을 위한 함수화

import client from './client';

// 로그인 함수

export const login = ({ username, password }) =>
  client.post('/api/auth/login', { username, password });

// 회원가입 함수

export const register = ({ username, password }) =>
  client.post('/api/auth/register', { username, password });

// 로그인 상태 확인 함수
export const check = () => client.get('/api/auth/check');
