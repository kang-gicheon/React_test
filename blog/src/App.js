import { Route, Routes } from '../node_modules/react-router-dom/dist/index';
import './App.css';
import LoginPage from './pages/LoginPage';
import PostListPage from './pages/PostListPage';
import PostPage from './pages/PostPage';
import RegisterPage from './pages/RegisterPage';
import WritePage from './pages/WritePage';

/**
 *  각 경로
 *  "/" = 포스트 목록 페이지
 *  "/login" = 로그인 페이지
 *  "/register" = 회원가입 페이지
 *  "/write" = 글 작성 페이지
 *  "/@username" = username 파라미터가 주어졌을 경우 특정 사용자가 작성한 포스트 목록
 *  파라미터가 정해져 있지 않을시 전체 포스트 목록으로 이동
 */

function App() {
  return (
    <Routes>
      <Route path="/" element={<PostListPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/write" element={<WritePage />} />
      <Route path="/@:username">
        <Route index element={<PostListPage />} />
        <Route path=":postId" element={<PostPage />} />
      </Route>
    </Routes>
  );
}

export default App;
