import { useNavigate } from 'react-router-dom';

const Navigation = () => {
  const navigate = useNavigate();

  const directPage = (path) => {
    navigate(`/${path}`);
  };

   return { directPage };
};

export default Navigation;
