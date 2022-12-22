import { useHistory } from 'react-router-dom';

function Test() {
  const history = useHistory();

  history.push('/');
  history.replace('/');

  history.go(0);
  history.goForward();
  history.goBack();

  console.log(history.location);
}
