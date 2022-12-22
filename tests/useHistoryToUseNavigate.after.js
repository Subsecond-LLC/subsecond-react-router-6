import { useNavigate } from 'react-router-dom';

function Test() {
  const navigate = useNavigate();

  navigate('/');
  navigate('/', { replace: true });

  navigate(0);
  navigate(1);
  navigate(-1);

  console.log(history.location);
}
